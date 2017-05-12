import './profil.html';

Template.profil.helpers({
	getType: function () {
		return Meteor.user().profile.type;
	}
});