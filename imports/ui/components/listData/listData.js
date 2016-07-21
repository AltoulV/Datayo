import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './listData.html';
import { Match } from '../../../api/match';
import { Player } from '../../../api/player';

class ListData {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.helpers({
      match() {
        return Match.find({});
      },
      player() {
        return Player.find({});
      }
    });
  }
}
 
const name = 'listdata';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
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
      template: '<listdata></listdata>'
    });
}