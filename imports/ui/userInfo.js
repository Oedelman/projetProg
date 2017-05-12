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


Template.sitterText.helpers({
  getSitterText: function() {
    return Meteor.user().profile.sitter_text;
  }
});


Template.type.helpers({
  getType: function() {
    return Meteor.user().profile.type;
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
    return "/"+fr+eng+it+ger+sp+por+rus;
  }
});

Template.competences.helpers({
  getSkills: function() {
    let cui="";
    let cond="";
    let voit="";
    let pSec="";
    let aideDev="";
    let activ="";

    if(Meteor.user().profile.cuisine=="on"){
      cui="Cuisine/"
    }
    if(Meteor.user().profile.conduire=="on"){
      cond="Savoir conduire/"
    }
    if(Meteor.user().profile.voiture=="on"){
      voit="Avoir une voiture/"
    }
    if(Meteor.user().profile.premierSec=="on"){
      pSec="Connaître les premier secours/"
    }
    if(Meteor.user().profile.aideDevoir=="on"){
      aideDev="Aide pour les devoirs/"
    }
    if(Meteor.user().profile.activ=="on"){
      activ="Organiser des activités/"
    }
    return "/"+cui+cond+voit+pSec+aideDev+activ;
  }
});