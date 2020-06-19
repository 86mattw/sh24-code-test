import React, { useContext } from 'react';

import AppContext from '../context';
import { updateEmail } from '../actions';
import { isValidEmail } from '../utils/validation';
import Layout from '../components/layout';
import TextInput from '../components/text-input';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <Layout nextPage="/question-3" prevPage="/question-1" nextEnabled={isValidEmail(state.email)}>
      <h2>What is your email address?</h2>
      <TextInput value={state.email} onChangeHandler={onEmailChange} />
    </Layout>
  );
};
