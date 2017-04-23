import './userInfo.html';

Template.mail.helpers({
  getMail: function() {
    return Meteor.user().emails[0].address;
  }
});