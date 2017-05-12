import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Babysitters = Meteor.users.find({"profile.type": "babysitter"});

//Meteor.methods({});
