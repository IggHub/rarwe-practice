import Ember from 'ember';

export default Ember.Component.extend({
  maxRating: 5,
  rating: 0,
  tagName: 'div',
  classNames: ['rating-panel'],
  item: null,
  "on-cick": null,

  stars: Ember.computed('rating', 'maxRating', function() {
    var fullStars = this.starRange(1, this.get('rating'), 'full');
    var emptyStars = this.starRange(this.get('rating') + 1,
      this.get('maxRating'), 'empty');
    //console.log(this.get('rating'));
    return fullStars.concat(emptyStars);
  }),

  starRange: function(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
          starsData.push({ rating: i, full: type === 'full' });
        }
    return starsData;
  },

  actions: {
    setRating(newRating){
      this.get('on-click', {
        item: this.get('item'),
        rating: newRating
      })
    },

    updateRating(params){
      var song = params.item, rating = params.rating;
      song.set('rating', rating);
    }
  }
});
