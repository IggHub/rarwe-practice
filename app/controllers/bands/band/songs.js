import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  isAddButtonDisabled: Ember.computed('title', function(){
    return Ember.isEmpty(this.get('title'));
  }),
  songCreationStarted: false,
  canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function(){
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
  sortProperties: ['rating: desc', 'title: asc'],
  sortedSongs: Ember.computed.filterBy('model.songs','sortProperties'),
  actions: {
    updateRating(params){
      var song = params.item, rating = params.rating;
      if(song.get('rating') === rating) {
        rating = 0;
      }
      song.set('rating', rating);
      return song.save();
    },
    enableSongCreation(){
      this.set('songCreationStarted', true);
    }
  }
});
