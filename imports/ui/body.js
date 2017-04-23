import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './body.html';
import './calendrier.html';
//import './register.js';
import './login.js';
import './userInfo.js';
import  './Qparents.js';

//Permet la navigation sans changement de lien
if(Meteor.isClient){

    Session.setDefault('page', 'home');

    UI.body.helpers({
        isPage: function(page){
            return Session.equals('page', page)
        }
    })

    UI.body.events({
        'click .clickChangesPage': function(event, template){
            Session.set('page', event.currentTarget.getAttribute('data-page'))
        }
    })

}
