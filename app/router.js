import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('prodoc');
  this.route('home');
  this.route('records');

  this.route('enduser');
  
  this.route('marksheet');
  this.route('certificate');
  this.route('main');
  this.route('govern');
  this.route('service');
});

export default Router;
