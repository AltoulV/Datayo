import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './testlol.html';


class TestLol {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
  }
}
 
const name = 'testlol';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: TestLol
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('testlol', {
      url: '/test',
      template: '<testlol></testlol>'
    });
}