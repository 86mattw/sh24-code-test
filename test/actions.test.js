import * as actions from '../src/actions';

describe('the update name action creator', () => {
  it('returns the expected object', () => {
    const action = actions.updateName('test-name');

    expect(action).toMatchObject({
      type: actions.UPDATE_NAME,
      payload: 'test-name',
    });
  });
});

describe('the update email action creator', () => {
  it('returns the expected object', () => {
    const action = actions.updateEmail('test-email-address');

    expect(action).toMatchObject({
      type: actions.UPDATE_EMAIL,
      payload: 'test-email-address',
    });
  });
});

describe('the update service action creator', () => {
  it('returns the expected object', () => {
    const action = actions.updateService('test-service');

    expect(action).toMatchObject({
      type: actions.UPDATE_SERVICE,
      payload: 'test-service',
    });
  });
});
