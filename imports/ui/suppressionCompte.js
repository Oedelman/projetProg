import './suppressionCompte.html';


Template.suppressionCompte.events({
	'click .deletion': function(event) {

	UId = Meteor.userId()

	Meteor.users.remove(UId);

	}
});