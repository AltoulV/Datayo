import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import template from './DataYo.html';
import { name as navigation } from '../navigation/navigation';
import { name as listData } from '../listData/listData';
import { name as testLol } from '../testlol/testlol';
import { name as AppDirective } from '../AppDirective/AppDirective';
import { name as SalutRemove } from '../salutRemove/salutRemove';
import { name as MatchRemove } from '../matchRemove/matchRemove';
import { name as EuropeData } from '../europeData/europeData';

class DataYo {}
 
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
  SalutRemove,
  MatchRemove,
  EuropeData
]).component(name, {
  template,
  controllerAs: name,
  controller: DataYo
})
  .config(config);
 
function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/');
}