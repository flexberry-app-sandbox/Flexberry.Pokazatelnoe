import {
  defineNamespace,
  defineProjections,
  Model as ГородMixin
} from '../mixins/regenerated/models/i-i-s-pokazatelnoe-город';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГородMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
