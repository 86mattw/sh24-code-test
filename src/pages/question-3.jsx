import React, { useContext } from 'react';

import AppContext from '../context';
import { updateService } from '../actions';
import Layout from '../components/layout';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  const onServiceChange = (e) => {
    dispatch(updateService(e.target.value));
  };

  return (
    <Layout nextPage="/review" prevPage="/question-2" nextEnabled>
      <h2>Which service do you need?</h2>
      <input
        type="text"
        value={state.service}
        onChange={onServiceChange}
      />
    </Layout>
  );
};
