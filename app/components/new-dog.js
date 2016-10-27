import Ember from 'ember';

export default Ember.Component.extend({
  addNewDog: false,
  actions: {
    dogFormShow() {
      this.set('addNewDog', true);
    },
    saveDog1() {
      var params = {
      name: this.get('name') || "(none given)",
      type: this.get('type') || "K-9",
      age: this.get('age') || "just a few",
      blog: this.get('blog') || "left blank",
      image: this.get('image') || 'https://s-media-cache-ak0.pinimg.com/564x/f9/e2/ba/f9e2baec94b67762f91e498a3dd340a0.jpg'
    };
    this.set('addNewDog', false);
    this.sendAction('saveDog2', params);
    }
  }
});
