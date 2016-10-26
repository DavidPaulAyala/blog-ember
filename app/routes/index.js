import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('dog');
  },
  actions: {
    saveDog3(params){
      var newDog = this.store.createRecord('dog', params);
      newDog.save();
      this.transitionTo('index');
    },
      deleteDog(dog){
        dog.destroyRecord();
        this.transitionTo('index');
      }
  }
});
