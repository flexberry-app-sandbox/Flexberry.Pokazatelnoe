import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  воЭтажей: DS.attr('number'),
  колвоЭтажей: DS.attr('number'),
  номер: DS.attr('number'),
  город: DS.belongsTo('i-i-s-pokazatelnoe-город', { inverse: null, async: false })
});

export let ValidationRules = {
  воЭтажей: {
    descriptionKey: 'models.i-i-s-pokazatelnoe-здание.validations.воЭтажей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоЭтажей: {
    descriptionKey: 'models.i-i-s-pokazatelnoe-здание.validations.колвоЭтажей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-pokazatelnoe-здание.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-pokazatelnoe-здание.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-pokazatelnoe-здание', {
    колвоЭтажей: attr('Колво этажей', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    город: belongsTo('i-i-s-pokazatelnoe-город', 'Город', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-pokazatelnoe-здание', {
    колвоЭтажей: attr('Колво этажей', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    город: belongsTo('i-i-s-pokazatelnoe-город', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
