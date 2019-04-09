import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alpinists', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alpinists');
    assert.ok(route);
  });
});
