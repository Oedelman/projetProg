import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './matches.html';

Template.matches.helpers({
	matches: function() {
		Meteor.subscribe('matches');
		return Meteor.users.find({
			"profile.type": "babysitter",
			"profile.codePostal": Meteor.user().profile.codePostal
		}).fetch();
	}
});

Template.matches.events({

});