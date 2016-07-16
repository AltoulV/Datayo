import { Meteor } from 'meteor/meteor';
import { Match } from '../imports/api/match';

Meteor.startup(() => {
  if (Match.find().count() === 0) {
    const match = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Saaaaaaaavage lounging',
      'description': 'Leisure suuuuuit required. And only fiercest manners.'
    }];
 
    match.forEach((party) => {
      Match.insert(party)
    });
  }
});