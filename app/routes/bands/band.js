import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log('Model hook called for `bands.band` called with', params.slug);
    return this.store.findRecord('band', params.id)
  },
});
