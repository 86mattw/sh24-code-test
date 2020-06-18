// Actions.
export const UPDATE_NAME = 'update-name';
export const UPDATE_EMAIL = 'update-email';
export const UPDATE_SERVICE = 'update-service';

// Action creators.
export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updateService = (service) => ({
  type: UPDATE_SERVICE,
  payload: service,
});
