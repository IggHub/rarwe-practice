import Ember from 'ember';
import Song from '../../../models/song';

export default Ember.Route.extend({
  model(){
    return this.modelFor('bands.band')
  },
  resetController(controller){
    controller.set('songCreationStarted', false);
  },

  actions: {
    createSong(){
      var controller = this.get('controller');
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(function(){
        controller.set('title', '');
      })
    },
    didTransition() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
  }
});
