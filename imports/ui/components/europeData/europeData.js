import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import Chart from 'angular-chart.js';

import template from './europeData.html';
import { Touche } from '../../../api/touche';
import { Competition } from '../../../api/competition';
import { name as ChartPie } from '../chartPie/chartPie';

class europeData {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.attr = ""
    this.mygenre = "";
    this.comp = "";
    this.type = "";
    this.action = "";
    this.where = "";
    this.helpers({
      touche() {
        return Touche.find({  'genre': this.getReactively('mygenre'),
                              'comp': this.getReactively('comp')
                            });
      },
       toucheType() {
        return Touche.find({
                              'genre': this.getReactively('mygenre'),
                              'type': this.getReactively('type'),
                              'comp': this.getReactively('comp')
                            });
      },
      toucheWhere() {
        return Touche.find({
                              'genre': this.getReactively('mygenre'),
                              'where': this.getReactively('where'),
                              'comp': this.getReactively('comp')
                            });
      },
      toucheAction() {
        return Touche.find({
                              'genre': this.getReactively('mygenre'),
                              'action': this.getReactively('action'),
                              'comp': this.getReactively('comp')
                            });
      },
      competition() {
        return Competition.find({});
      }
    });
  }
  men () {
    this.mygenre = "Homme";
  }
  women () {
    this.mygenre = "Femme";
  }
  somme () {
    if (this.touche[0] != null) {
      return this.touche.length;
    }
  }
}

const name = 'europedata';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chart,
  ChartPie
]).component(name, {
  template,
  controllerAs: name,
  controller: europeData
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<europeData></europeData>'
    });
}