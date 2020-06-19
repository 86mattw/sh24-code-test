import React, { useContext } from 'react';

import AppContext from '../context';
import { updateService } from '../actions';
import { isValidService } from '../utils/validation';
import Layout from '../components/layout';
import RadioGroup from '../components/radio-group';

import panelStyles from '../sass/panel.module.scss';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onServiceChange = (e) => {
    dispatch(updateService(e.target.value));
  };

  const options = [
    'STI Testing',
    'Contraception',
    'Other',
  ];

  return (
    <Layout nextPage="/review" prevPage="/question-2" nextEnabled={isValidService(state.service)}>
      <section className={panelStyles.container}>
        <h2 className={panelStyles.heading}>What service are you here for?</h2>
        <RadioGroup
          name="service"
          options={options}
          onChangeHandler={onServiceChange}
          selected={state.service}
        />
      </section>
    </Layout>
  );
};
