import React, { useContext } from 'react';

import AppContext from '../context';
import { updateEmail } from '../actions';
import { isValidEmail } from '../utils/validation';
import Layout from '../components/layout';
import TextInput from '../components/text-input';

import panelStyles from '../sass/panel.module.scss';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <Layout nextPage="/question-3" prevPage="/question-1" nextEnabled={isValidEmail(state.email)}>
      <section className={panelStyles.container}>
        <h2 className={panelStyles.heading}>What is your email address?</h2>
        <TextInput value={state.email} label="Email address" onChangeHandler={onEmailChange} />
      </section>
    </Layout>
  );
};
