import React, { useReducer } from 'react';
import { node } from 'prop-types';

import AppContext from '../context';
import reducer from '../reducer';

const initialState = {
  name: '',
  email: '',
  service: '',
};

const AppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppWrapper.propTypes = {
  children: node.isRequired,
};

export default AppWrapper;
