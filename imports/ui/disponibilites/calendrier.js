import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Disponibilites } from '../../api/disponibilites';

import './tranche.js';
import './calendrier.html';

Template.calendrier.helpers({
  tranches: [
  	{nom: '6h-8h'},
  	{nom: '10h-12h'},
  	{nom: '12h-14h'},
  	{nom: '14h-16h'},
  ],
  nomsJours: [
  	'Lundi',
  	'Mardi',
  	'Mercredi',
  	'Jeudi',
  	'Vendredi',
  	'Samedi',
  	'Dimanche'
  ],
  'disponibilites' (){
  	return Disponibilites.find({});
  }
});

Template.calendrier.events({
  'click input'(event) {
    Meteor.call('disponibilites.click',
      event.currentTarget.dataset.tranche,
      event.currentTarget.dataset.jour
    );
  }
});