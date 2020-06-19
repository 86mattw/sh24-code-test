import React, { useContext } from 'react';

import AppContext from '../context';
import { updateName } from '../actions';
import { isValidName } from '../utils/validation';
import Layout from '../components/layout';
import TextInput from '../components/text-input';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  return (
    <Layout nextPage="/question-2" nextEnabled={isValidName(state.name)}>
      <h2>What is your name?</h2>
      <TextInput value={state.name} onChangeHandler={onNameChange} />
    </Layout>
  );
};
