import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let blackDog = Ember.Object.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });
    let yellowLedbetter = Ember.Object.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });
    let pretender = Ember.Object.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    return [blackDog, yellowLedbetter, pretender];
  }
});
