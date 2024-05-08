const assert = require('assert');
const app = require('../../src/app');

describe('\'userProfile\' service', () => {
  it('registered the service', () => {
    const service = app.service('userProfile');

    assert.ok(service, 'Registered the service (userProfile)');
  });
});
