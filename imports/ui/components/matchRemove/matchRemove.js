import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './matchRemove.html';
import { Match } from '../../../api/match';
import { Touche } from '../../../api/touche';
 
class MatchRemove {
    constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.helpers({
      match() {
        return Match.find({"_id" : this.data._id});
      }
    });
  }
  remove() {
    if (this.data) {
      if (this.match[0].id_touche) {
        this.match[0].id_touche.forEach((touche) => {
          Touche.remove(touche);
          });
      }
      Match.remove(this.data._id);
    }
  }
}

const name = 'matchRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    data: '<'
  },
  controllerAs: name,
  controller: MatchRemove
});