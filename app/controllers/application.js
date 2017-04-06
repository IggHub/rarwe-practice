import Ember from 'ember';

export default Ember.Controller.extend({
  addressTypes: ['mailing', 'practice'],
  selectedAddressType: 'mailing',
  actions: {
    createAddressType(addressType){
      this.get('addressTypes').pushObject(addressType);
      this.set('selectedAddressType', addressType);
      console.log(this.get('countries'));
    },
    chooseAddressType(addressType){
      this.set('selectedAddressType', addressType);
    }
  }
});
