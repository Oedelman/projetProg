import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import './body.html';
import './disponibilites/calendrier.js';
import './login.js';
import './userInfo.js';
import './register/Qparents.js';
import './register/Qbabysitter.js';
import './matches/matches.js';
import './profil.js';
import './suppressionCompte.js';
import './infoBabysitter.html';


//Permet la navigation sans changement de lien
if(Meteor.isClient){
    
    Session.setDefault('page', 'home');

    UI.body.helpers({
        isPage: function(page){
            return Session.equals('page', page)
        },
        profileType: function() {
            return Meteor.user().profile.type;
        }
    })

    UI.body.events({
        'click .clickChangesPage': function(event, template){
            Session.set('page', event.currentTarget.getAttribute('data-page'))
        }
    })

}