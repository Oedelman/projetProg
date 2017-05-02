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

Template.enfants.helpers({
  getEnfants: function() {
    return Meteor.user().profile.enfants;
  }
});

Template.langues.helpers({
  getLangues: function() {
    let fr="";
    let eng="";
    let it="";
    let ger="";
    let sp="";
    let por="";
    let rus="";
    if(Meteor.user().profile.francais=="on"){
      fr="Français/"
    }
    if(Meteor.user().profile.anglais=="on"){
      eng="Anglais/"
    }
    if(Meteor.user().profile.italien=="on"){
      it="Italien/"
    }
    if(Meteor.user().profile.allemand=="on"){
      ger="Allemand/"
    }
    if(Meteor.user().profile.espagnol=="on"){
      sp="Espagnol/"
    }
    if(Meteor.user().profile.portugais=="on"){
      por="Portugais/"
    }
    if(Meteor.user().profile.russe=="on"){
      rus="Russe/"
    }
    return "/"fr+eng+it+ger+sp+por+rus;
  }
});