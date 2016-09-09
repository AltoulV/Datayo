import { Meteor } from 'meteor/meteor';
import { Touche } from '../imports/api/touche';
import { Match } from '../imports/api/match';
import { Competition } from '../imports/api/competition';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  if (Match.find().count() === 0) {
      Match.insert({nameG:"test", nameD:"test2", scoreD:15, scoreG:14, date:"12/03/2001"})
  }
  });
