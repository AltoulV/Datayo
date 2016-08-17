import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './matchRemove.html';
import { Match } from '../../../api/match';
 
class MatchRemove {
  remove() {
    if (this.data) {
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