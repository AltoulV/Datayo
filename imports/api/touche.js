import { Mongo } from 'meteor/mongo';
 
export const Touche = new Mongo.Collection('touche');

Touche.allow({
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