import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_SERVICE,
} from '../actions';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        service: action.payload,
      };
    default:
      return state;
  }
};
