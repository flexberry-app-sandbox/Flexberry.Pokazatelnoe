import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pokazatelnoe-город-l');
  this.route('i-i-s-pokazatelnoe-город-e',
  { path: 'i-i-s-pokazatelnoe-город-e/:id' });
  this.route('i-i-s-pokazatelnoe-город-e.new',
  { path: 'i-i-s-pokazatelnoe-город-e/new' });
  this.route('i-i-s-pokazatelnoe-здание-l');
  this.route('i-i-s-pokazatelnoe-здание-e',
  { path: 'i-i-s-pokazatelnoe-здание-e/:id' });
  this.route('i-i-s-pokazatelnoe-здание-e.new',
  { path: 'i-i-s-pokazatelnoe-здание-e/new' });
});

export default Router;
