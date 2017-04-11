import Ember from 'ember';
import Band from '../models/band';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('band');
  },

  actions: {
    createBand(){
      var route = this,
        controller = this.get('controller');
      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function(){
        controller.set('name', '');
        route.transitionTo('bands.band.song', band);
      });
    },
    didTransition(){
      document.title = "Rock n Roll!"
    }
  }
});
