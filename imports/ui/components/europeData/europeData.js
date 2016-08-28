import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import Chart from 'angular-chart.js';

import template from './europeData.html';
import { Touche } from '../../../api/touche';
import { name as chartpie } from '../chartPie/chartPie';

class europeData {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.attr = ""
    this.mygenre = "";
    this.helpers({
      touche() {
        return Touche.find({'genre': this.getReactively('mygenre')});
      }
    });
  }
  men () {
    this.mygenre = "Homme";
  }
  women () {
    this.mygenre = "Femme";
  }
}

const name = 'europedata';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chart,
  chartpie
]).component(name, {
  template,
  controllerAs: name,
  controller: europeData
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('europeData', {
      url: '/europeData',
      template: '<europeData></europeData>'
    });
}