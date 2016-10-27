import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       dog: this.get('dog')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
