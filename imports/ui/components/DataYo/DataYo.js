import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import template from './DataYo.html';
import { name as navigation } from '../navigation/navigation';
import { name as listData } from '../listData/listData';
import { name as testLol } from '../testlol/testlol';
import { name as AppDirective } from '../AppDirective/AppDirective';
import { name as ToucheRemove } from '../toucheRemove/toucheRemove';
import { name as MatchRemove } from '../matchRemove/matchRemove';
import { name as EuropeData } from '../europeData/europeData';
import { name as Auth } from '../auth/auth';

class DataYo {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
 
    this.helpers({
      isLoggedIn() {
        return !!Meteor.userId();
      }
    });
  }
}
 
const name = 'datayo';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  ngMaterial,
  uiRouter,
  navigation,
  listData,
  testLol,
  AppDirective,
  ToucheRemove,
  MatchRemove,
  EuropeData,
  Auth
]).component(name, {
  template,
  controllerAs: name,
  controller: DataYo
})
  .config(config)
  .run(run);
 
function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/home');
}

function run($rootScope, $state) {
  'ngInject';
 
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('home');
      }
    }
  );
}