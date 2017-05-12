import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import { Babysitters } from '../../api/babysitters';

import './match.html';

Template.match.helpers({
	'matches' () {
		//var codePostal = Meteor.user().profile.codePostal;
		//console.log(Meteor.users.find());
		return Meteor.users.find().fetch();
	}
});

Template.match.events({

});