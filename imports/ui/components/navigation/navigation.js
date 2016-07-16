import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './navigation.html';
 
class navigation {
	constructor($scope, $reactive) {
    'ngInject';
 
    $scope.toggle = false;
  }
}

const name = 'navigation';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name
});