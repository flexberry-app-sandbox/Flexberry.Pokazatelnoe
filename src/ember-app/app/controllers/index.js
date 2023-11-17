import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.pokazatelnoe.caption'),
          title: i18n.t('forms.application.sitemap.pokazatelnoe.title'),
          children: [{
            link: 'i-i-s-pokazatelnoe-здание-l',
            caption: i18n.t('forms.application.sitemap.pokazatelnoe.i-i-s-pokazatelnoe-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.pokazatelnoe.i-i-s-pokazatelnoe-здание-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-pokazatelnoe-город-l',
            caption: i18n.t('forms.application.sitemap.pokazatelnoe.i-i-s-pokazatelnoe-город-l.caption'),
            title: i18n.t('forms.application.sitemap.pokazatelnoe.i-i-s-pokazatelnoe-город-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})