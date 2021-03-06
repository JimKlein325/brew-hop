import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('zip', {path: '/:zip'});
  this.route('detail', {path: '/detail/:queryInfo'});
});

export default Router;
