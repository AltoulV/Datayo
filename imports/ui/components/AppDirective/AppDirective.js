import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';

import template from '../svg.html';

class AppControl {
    constructor($scope, $reactive, $mdDialog) {
        'ngInject';
        $reactive(this).attach($scope);
        this.mdDialog = $mdDialog;
        this.match = [];
        this.hoverPiste;
        this.hoverRegion;
        this.hoverAction;
        this.objTmp = {type: "", where: "", action:"", given:""};
        this.scoreG = 0;
        this.scoreD = 0;
    }
    pushData() {
        if (this.scoreG < 15 && this.scoreD < 15) {
            if (this.objTmp.given == "D") {
                this.scoreD += 1;
            }
            if (this.objTmp.given == "G") {
                this.scoreG += 1;
            }
            this.match[this.match.length] = angular.copy(this.objTmp);
        }
        if (this.scoreG == 15 || this.scoreD == 15)
        {
            alert = this.mdDialog.alert({
                title: 'Attention',
                textContent: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });
            this.mdDialog.show( alert )
            .finally(function() {
            alert = undefined;
        })
        }
        this.objTmp = {type: "", where: "", action:"", given:""};
        this.hoverRegion = null;
        this.hoverAction = null;
        this.hoverPiste = null;
    }
    resetData() {
        this.match = []
        this.objTmp = {type: "", where: "", action:"", given:""};
        this.scoreG = 0;
        this.scoreD = 0;
        this.hoverRegion = null;
        this.hoverAction = null;
    }
    backData() {
        if (this.match.length != 0) {
            if (this.match[this.match.length-1].given == "D" && this.scoreD > 0) {
                this.scoreD -= 1;
            }
            if (this.match[this.match.length-1].given == "G" && this.scoreG > 0) {
                this.scoreG -= 1;
            }
            this.match.splice(this.match.length-1,1);
            this.objTmp = {type: "", where: "", action:"", given:""};
        }
    }
}

const name = 'appdirective';

export default angular.module(name, [
    angularMeteor,
    ngMaterial
]).directive(name, ['$compile', function ($compile) {
    return {
        restrict: 'AE',
        template,
        link: function (scope, element, attrs) {
            var regions = element[0].querySelectorAll('.type');
            var action = element[0].querySelectorAll('.Action');
            var score = element[0].querySelectorAll('.Score');
            var piste = element[0].querySelectorAll('.Piste');
            angular.forEach(regions, function (path, key) {
                var regionElement = angular.element(path);
                regionElement.attr("region", "");
                regionElement.attr("hover-region", "appdirective.hoverRegion");
                regionElement.attr("obj-tmp", "appdirective.objTmp");
                $compile(regionElement)(scope);
            })
            angular.forEach(action, function (path, key) {
                var actionElement = angular.element(path);
                actionElement.attr("hover-action", "appdirective.hoverAction");
                actionElement.attr("action", "");
                actionElement.attr("obj-tmp", "appdirective.objTmp");
                $compile(actionElement)(scope);
            })
            angular.forEach(score, function (path, key) {
                var scoreElement = angular.element(path);
                scoreElement.attr("score", "");
                scoreElement.attr("score-D", "appdirective.scoreD");
                scoreElement.attr("score-G", "appdirective.scoreG");
                scoreElement.attr("obj-tmp", "appdirective.objTmp");
                scoreElement.attr("add-data", "appdirective.pushData()");
                scoreElement.attr("reset-data", "appdirective.resetData()");
                scoreElement.attr("back-data", "appdirective.backData()");
                $compile(scoreElement)(scope);
            })
            angular.forEach(piste, function (path, key) {
                var pisteElement = angular.element(path);
                pisteElement.attr("piste", "");
                pisteElement.attr("hover-piste", "appdirective.hoverPiste");
                pisteElement.attr("obj-tmp", "appdirective.objTmp");
                $compile(pisteElement)(scope);
            })
        },
        controllerAs: name,
        controller: AppControl
    }
}]).directive('score', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            scoreD: "=",
            scoreG: "=",
            addData: '&',
            resetData: '&',
            backData: '&',
            objTmp: "="
        },
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.scoreClick = function () {
                if (scope.elementId == "D") {
                    scope.objTmp.given = "D";
                    scope.addData();
                }
                if (scope.elementId == "G") {
                    scope.objTmp.given = "G";
                    scope.addData();
                }
                if (scope.elementId == "SI") {
                    scope.objTmp.given = "SI";
                    scope.objTmp.type = scope.elementId;
                    scope.objTmp.action = "AcC"
                    scope.addData();
                }
                if (scope.elementId == "Reset") {
                    scope.resetData();
                }
                if (scope.elementId == "Back") {
                    scope.backData();
                }
            };
            element.attr("ng-click", "scoreClick()");
            element.removeAttr("score");
            $compile(element)(scope);
        }
    }
}]).directive('piste', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            hoverPiste: "=",
            objTmp: "="
        },
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.pisteClick = function () {
                if (scope.hoverPiste == scope.elementId){
                    scope.hoverPiste = null;
                    scope.objTmp.where = null;
                }
                else {
                    scope.hoverPiste = scope.elementId;
                    scope.objTmp.where = scope.elementId;
                }
            };
            element.attr("ng-class", "{active:hoverPiste==elementId}");
            element.attr("ng-click", "pisteClick()");
            element.removeAttr("piste");
            $compile(element)(scope);
        }
    }
}]).directive('action', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            hoverAction: "=",
            objTmp: "=",
        },
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.actionClick = function () {
                if (scope.hoverAction == scope.elementId){
                    scope.hoverAction = null;
                    scope.objTmp.action = null;
                }
                else {
                    scope.hoverAction = scope.elementId;
                    scope.objTmp.action = scope.elementId;
                }
            };
            element.attr("ng-class", "{active:hoverAction==elementId}");
            element.attr("ng-click", "actionClick()");
            element.removeAttr("action");
            $compile(element)(scope);
        }
    }
}]).directive('region', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            hoverRegion: "=",
            objTmp: "="
        },
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.regionClick = function () {
                if (scope.hoverRegion == scope.elementId){
                    scope.hoverRegion = null;
                    scope.objTmp.type = null;
                }
                else {
                    scope.hoverRegion = scope.elementId;
                    scope.objTmp.type = scope.elementId;
                }
            };
            element.attr("ng-class", "{active:hoverRegion==elementId}");
            element.attr("ng-click", "regionClick()");
            element.removeAttr("region");
            $compile(element)(scope);
        }
    }
}]);