import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('Dashboard');
  this.route('home');
  this.route('records');

  this.route('enduser');

  this.route('marksheet');
  this.route('certificate');
  this.route('main');
  this.route('docupload');
  this.route('service');
  this.route('share');
  this.route('audit');
  this.route('user');
  this.route('admin');
  this.route('admincert');
  this.route('sentrequest');
  this.route('dash');
  this.route('adminissued');
  this.route('adminupload');
});

export default Router;
