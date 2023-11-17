import {
  defineNamespace,
  defineProjections,
  Model as ЗданиеMixin
} from '../mixins/regenerated/models/i-i-s-pokazatelnoe-здание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗданиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
