import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log('Model hook called for `bands.band` called with', params.slug);
    var bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug);
  },
});
