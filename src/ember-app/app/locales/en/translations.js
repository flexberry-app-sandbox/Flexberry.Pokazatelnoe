import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPokazatelnoeГородLForm from './forms/i-i-s-pokazatelnoe-город-l';
import IISPokazatelnoeЗданиеLForm from './forms/i-i-s-pokazatelnoe-здание-l';
import IISPokazatelnoeГородEForm from './forms/i-i-s-pokazatelnoe-город-e';
import IISPokazatelnoeЗданиеEForm from './forms/i-i-s-pokazatelnoe-здание-e';
import IISPokazatelnoeГородModel from './models/i-i-s-pokazatelnoe-город';
import IISPokazatelnoeЗданиеModel from './models/i-i-s-pokazatelnoe-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pokazatelnoe-город': IISPokazatelnoeГородModel,
    'i-i-s-pokazatelnoe-здание': IISPokazatelnoeЗданиеModel
  },

  'application-name': 'Pokazatelnoe',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Pokazatelnoe',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Pokazatelnoe',
          title: 'Pokazatelnoe'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        pokazatelnoe: {
          caption: 'Pokazatelnoe',
          title: 'Pokazatelnoe',
          'i-i-s-pokazatelnoe-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-pokazatelnoe-город-l': {
            caption: 'Город',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-pokazatelnoe-город-l': IISPokazatelnoeГородLForm,
    'i-i-s-pokazatelnoe-здание-l': IISPokazatelnoeЗданиеLForm,
    'i-i-s-pokazatelnoe-город-e': IISPokazatelnoeГородEForm,
    'i-i-s-pokazatelnoe-здание-e': IISPokazatelnoeЗданиеEForm
  },

});

export default translations;
