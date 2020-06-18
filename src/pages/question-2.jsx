import React, { useContext } from 'react';

import AppContext from '../context';
import { updateEmail } from '../actions';
import Layout from '../components/layout';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <Layout nextPage="/question-3" prevPage="/question-1" nextEnabled>
      <h2>What is your email address?</h2>
      <input
        type="text"
        value={state.email}
        onChange={onEmailChange}
      />
    </Layout>
  );
};
