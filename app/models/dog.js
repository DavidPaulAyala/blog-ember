import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  age: DS.attr(),
  image: DS.attr(),
  blog: DS.attr()
});
