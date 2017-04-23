import './userInfo.html';

Template.mail.helpers({
  getMail: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.nom.helpers({
  getNom: function() {
    return Meteor.user().profile.last_name;
  }
});

Template.prenom.helpers({
  getPrenom: function() {
    return Meteor.user().profile.first_name;
  }
});

Template.tel.helpers({
  getTel: function() {
    return Meteor.user().profile.phone;
  }
});

Template.poste.helpers({
  getPoste: function() {
    return Meteor.user().profile.postalCode;
  }
});

Template.address.helpers({
  getAddress: function() {
    return Meteor.user().profile.address;
  }
});