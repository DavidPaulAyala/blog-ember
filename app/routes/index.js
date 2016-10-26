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

    update(dog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          dog.set(key,params[key]);
        }
      });
      dog.save();
      this.transitionTo('index');
    },

    deleteDog(dog){
      dog.destroyRecord();
      this.transitionTo('index');
    }
  }
});
