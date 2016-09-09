import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
 
import template from './auth.html';
import { name as Login } from '../login/login';
 
const name = 'auth';
 
class Auth {
  constructor($scope, $reactive, $state) {
    'ngInject';
 
    this.$state = $state;

    $reactive(this).attach($scope);

    this.helpers({
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUser() {
        return Meteor.user();
      }
    });
  }
 
  logout() {
    Accounts.logout();
    this.$state.go('home');
  }
}
 
// create a module
export default angular.module(name, [
  angularMeteor,
  Login
]).component(name, {
  template,
  controllerAs: name,
  controller: Auth
});