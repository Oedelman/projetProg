import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const Disponibilites = new Mongo.Collection(null);
 
Meteor.methods({
  'disponibilites.click'(tranche, jour) {
 
    const dispo = Disponibilites.findOne({nom: tranche});

    if(undefined==dispo) {
      Disponibilites.insert({
          nom: tranche,
          jours: [jour]
      });
    } else {
      let jours = dispo.jours;
      let index =  jours.indexOf(jour);
      if(index > -1) {
        jours.splice(index, 1)
        if(jours.length<1) {
          Disponibilites.remove({nom: tranche});
        } else {
          Disponibilites.update({nom: tranche}, { $set: { jours } });
        }
      } else {
        jours.push(jour);
        Disponibilites.update({nom: tranche}, { $set: { jours } });
      }
    }
  },
});
