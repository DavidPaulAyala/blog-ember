import Ember from 'ember';

export default Ember.Component.extend({
  updateDogForm: false,
  actions: {
    updateDogForm() {
      this.set('updateDogForm', true);
    },
    update(dog) {
      var params = {
      blog:this.get('blog')
      };
      this.set('updateDogForm', false);
      this.sendAction('update', dog, params);
    }
  }
});
