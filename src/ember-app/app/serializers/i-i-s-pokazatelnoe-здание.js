import { Serializer as ЗданиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pokazatelnoe-здание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗданиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
