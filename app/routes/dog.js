import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('dog', params.dog_id);
  },
  actions: {
    update(dog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          dog.set(key,params[key]);
        }
      });
      dog.save();
      this.transitionTo('dog');
    },
    saveComment(params) {
          var newComment = this.store.createRecord('comment', params);
          var dog = params.dog;
          dog.get('comments').addObject(newComment);
          newComment.save().then(function() {
            return dog.save();
          });
          this.transitionTo('dog', dog);
        },
        deleteComment(comment){
          comment.destroyRecord();
          this.transitionTo('index');
        },
    deleteDog(dog){
      var comment_deletions = dog.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function(){
        return dog.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
