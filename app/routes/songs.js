import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  name: '',
  rating: 0
});

export default Ember.Route.extend({
  model(){
    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });
    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });
    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    return [blackDog, yellowLedbetter, pretender];
  }
});
