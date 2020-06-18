import reducer from '../src/reducer';
import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_SERVICE,
} from '../src/actions';

const initialState = {
  name: '',
  email: '',
  service: '',
};

describe('the reducer', () => {
  it('correctly updates the state with the customer name', () => {
    const action = {
      type: UPDATE_NAME,
      payload: 'test name',
    };

    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      name: 'test name',
      email: '',
      service: '',
    });
  });

  it('correctly updates the state with the customer email address', () => {
    const action = {
      type: UPDATE_EMAIL,
      payload: 'test-email@test.com',
    };

    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      name: '',
      email: 'test-email@test.com',
      service: '',
    });
  });

  it('correctly updates the state with the customer service', () => {
    const action = {
      type: UPDATE_SERVICE,
      payload: 'test service',
    };

    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      name: '',
      email: '',
      service: 'test service',
    });
  });

  it('returns the current state when an unknown action occurs', () => {
    const action = {
      type: 'unknown',
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
