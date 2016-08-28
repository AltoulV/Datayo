import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import Chart from 'angular-chart.js';

import template from './chartPie.html';

class chartPie {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.labels = [];
    this.data = [];
    this.autorun(() => {
      this.getReactively('myData');
      this.search();
      this.pourcentage();
    });
}
  search() {
    this.labels = [];
    this.data = [];
    var tmp = this.myAttr;
    var data = this.myData;
    for (var i = 0; i < data.length; i++) {
      if (this.labels.includes(data[i][tmp]) == false && data[i][tmp] != "") {
        this.labels.push(data[i][tmp]);
        this.data.push(this.get_value(data[i][tmp], tmp));
      }
    };
  }
  pourcentage () {
    var total = 0;
    var ret = 0;
    for (var i = 0; i < this.data.length; i++) {
      total += this.data[i];
    };
    for (var i = 0; i < this.data.length; i++) {
      //var tmp = this.data[i];
      this.data[i] = Math.round(this.data[i] / total * 100);
      //    code pour assurer un total de 100 -- fausse un peu les valeurs
      //this.data[i] = Math.trunc((this.data[i] / total * 100) + ret);
      // ret = Math.round((((tmp / total * 100) + ret) - Math.trunc((tmp / total * 100) + ret))*100)/100;
      // if (i == this.data.length - 1) {
      //   this.data[i] = Math.round(this.data[i] + ret);
      // }
    };
  }
  get_value(value, param) {
    var tmp = 0;
    for (var i = 0; i < this.myData.length; i++) {
      if (this.myData[i][param] == value) {
        tmp += 1;
      }
    };
    return tmp;
  }
}

const name = 'chartpie';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chart
]).component(name, {
  template,
  bindings: {
    myAttr: '@',
    myData: '='
  },
  controllerAs: name,
  controller: chartPie
})