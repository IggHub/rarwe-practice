import Ember from 'ember';

export default Ember.Controller.extend({
  addressTypes: ['mailing', 'practice'],
  selectedAddressType: 'mailing',
  actions: {
    createAddressType(addressType){
      this.set('selectedAddressType', addressType);
    },
    chooseAddressType(addressType){
      this.set('selectedAddressType', addressType);
    }
  }
});
