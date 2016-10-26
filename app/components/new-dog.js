import Ember from 'ember';

export default Ember.Component.extend({
  addNewDog: false,
  actions: {
    dogFormShow() {
      this.set('addNewDog', true);
    },
    saveDog1() {
      var params = {
      name: this.get('name'),
      type: this.get('type'),
      age: this.get('age'),
      blog: this.get('blog'),
      image: this.get('image')
    };
    this.set('addNewDog', false);
    this.sendAction('saveDog2', params);
    }
  }
});
