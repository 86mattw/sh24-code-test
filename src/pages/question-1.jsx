import React, { useContext } from 'react';

import AppContext from '../context';
import Layout from '../components/layout';
import TextInput from '../components/text-input';

import { getQuestion } from '../utils/questions';

import panelStyles from '../sass/panel.module.scss';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const question = getQuestion(1);

  console.log('question', question);

  const onChange = (e) => {
    dispatch(question.update(e.target.value));
  };

  return (
    <Layout nextPage="/question-2" nextEnabled={question.validate(state[question.value])}>
      <section className={panelStyles.container}>
        <h2 className={panelStyles.heading}>{question.title}</h2>
        <TextInput value={state[question.value]} label={question.label} onChangeHandler={onChange} />
      </section>
    </Layout>
  );
};
