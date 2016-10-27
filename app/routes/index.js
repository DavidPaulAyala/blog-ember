import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dogs: this.store.findAll('dog'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    saveDog3(params){
      var newDog = this.store.createRecord('dog', params);
      newDog.save();
      this.transitionTo('index');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
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
