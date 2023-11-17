import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pokazatelnoe-город', 'Unit | Model | i-i-s-pokazatelnoe-город', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-pokazatelnoe-город',
    'model:i-i-s-pokazatelnoe-здание',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
