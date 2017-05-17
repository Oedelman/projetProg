import './suppressionCompte.html';


Template.suppressionCompte.events({
	'click .deletion': function(event) {
/*
	UId = Meteor.userId()

	Meteor.users.remove(UId);
*/
	Meteor.call('selfDelete');
	}
});

Meteor.methods({
	'selfdel'() {
	Meteor.users.remove(this.userId);
	}
});

Meteor.methods({
  'selfDelete'() {
    if (!Meteor.isServer) return;

    try {
      Meteor.users.remove(this.userId);
    } catch (e) {
      // handle this however you want
      throw new Meteor.Error('self-delete', 'Failed to remove yourself');
    }
  },
});