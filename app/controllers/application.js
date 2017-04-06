import Ember from 'ember';

export default Ember.Controller.extend({
  countries: ['United States', 'Spain', 'Portugal', 'Russia', 'Latvia', 'Brazil', 'UK'],
  chosenCountry: 'United States',
  actions: {
    createCountry(countryName){
      this.get('countries').pushObject(countryName);
      this.set('chosenCountry', countryName);
      console.log(this.get('countries'));
    },
    chooseCountry(countryName){
      this.set('chosenCountry', countryName);
    }
  }
});
