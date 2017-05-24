import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Disponibilites } from '../../api/disponibilites';

import './tranche.js';
import './calendrier.html';

Template.calendrier.helpers({
  nomsJours: [
  	{nom: 'Lundi'},
  	{nom: 'Mardi'},
  	{nom: 'Mercredi'},
  	{nom: 'Jeudi'},
	{nom: 'Vendredi'},
	{nom: 'Samedi'},
	{nom: 'Dimanche'},
  ],
  tranches: [
   '8h-12h',
  '12h-16h',
  '16h-20h',
  '20h-00h',
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
