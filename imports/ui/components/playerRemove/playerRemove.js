import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './playerRemove.html';
import { Player } from '../../../api/player';
 
class PlayerRemove {
  remove() {
    if (this.data) {
      Player.remove(this.data._id);
    }
  }
}
 
const name = 'playerRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    data: '<'
  },
  controllerAs: name,
  controller: PlayerRemove
});