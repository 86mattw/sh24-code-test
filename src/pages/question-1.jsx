import React, { useContext } from 'react';

import AppContext from '../context';
import { updateName } from '../actions';
import Layout from '../components/layout';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  return (
    <Layout nextPage="/question-2" nextEnabled>
      <h2>What is your name?</h2>
      <input
        type="text"
        value={state.name}
        onChange={onNameChange}
      />
    </Layout>
  );
};
