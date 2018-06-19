import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | adminissued', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:adminissued');
    assert.ok(route);
  });
});
