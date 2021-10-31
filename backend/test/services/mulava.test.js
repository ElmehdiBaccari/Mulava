const assert = require('assert');
const app = require('../../src/app');

describe('\'mulava\' service', () => {
  it('registered the service', () => {
    const service = app.service('mulava');

    assert.ok(service, 'Registered the service');
  });
});
