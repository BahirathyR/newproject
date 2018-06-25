import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | employerupload', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:employerupload');
    assert.ok(route);
  });
});
