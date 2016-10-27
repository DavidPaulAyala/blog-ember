import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(dog) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deleteDog', dog);
      }
      },
      deleteComment(comment) {
     this.sendAction('deleteComment', comment);
    }
  }
});
