import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import Chart from 'angular-chart.js';

import template from './listData.html';
import { Touche } from '../../../api/touche';
import { Match } from '../../../api/match';
import { Competition } from '../../../api/competition';
import { name as chartpie } from '../chartPie/chartPie';

class ListData {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.input = "";
    this.selectedPrise = null;
    this.selectedMise = null;
    this.selectedFilter = "type";
    this.helpers({
      touche() {
        return Touche.find({});
      },
      match() {
        return Match.find({});
      },
      competition() {
        return Competition.find({});
      }
    });
  }
  addComp() {
    Competition.insert({'name': this.input});
  }
  supComp() {
    if (this.competition.length > 0) {
      Competition.remove(this.competition[this.competition.length - 1]._id);
    }
  }
}

const name = 'listdata';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chart,
  chartpie
]).component(name, {
  template,
  controllerAs: name,
  controller: ListData
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ListData', {
      url: '/ListData',
      template: '<listdata></listdata>',
      resolve: {
      currentUser($q) {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
    });
}