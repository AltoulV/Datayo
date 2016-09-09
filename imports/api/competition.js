import { Mongo } from 'meteor/mongo';
 
export const Competition = new Mongo.Collection('competition');

Competition.allow({
  insert(userId, party) {
    return userId;
  },
  update(userId, party, fields, modifier) {
    return userId;
  },
  remove(userId, party) {
    return userId;
  }
});