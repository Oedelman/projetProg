import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import './tranche.html';
 
Template.tranche.helpers({
  nomsJours: [
  	'Lundi',
  	'Mardi',
  	'Mercredi',
  	'Jeudi',
  	'Vendredi',
  	'Samedi',
  	'Dimanche'
  ],
});
