import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pokazatelnoe-город', 'Unit | Serializer | i-i-s-pokazatelnoe-город', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-pokazatelnoe-город',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-pokazatelnoe-город',
    'model:i-i-s-pokazatelnoe-здание',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
