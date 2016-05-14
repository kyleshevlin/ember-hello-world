import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  helloWorld: inject.service(),
  model() {
    return this.get('helloWorld').sayHello
  }
});
