import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import template from './DataYo.html';
import { name as navigation } from '../navigation/navigation';
import { name as listData } from '../listData/listData';
import { name as testLol } from '../testlol/testlol';
import { name as AppDirective } from '../AppDirective/AppDirective';

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
  AppDirective
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