import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import './tranche.html';
 
Template.tranche.helpers({
  tranches: [
    '8h-12h',
  '12h-16h',
  '16h-20h',
  '20h-00h',
  ],
});
