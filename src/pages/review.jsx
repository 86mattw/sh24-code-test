import React, { useContext } from 'react';
import { Link } from 'gatsby';

import AppContext from '../context';
import Layout from '../components/layout';

import panelStyles from '../sass/panel.module.scss';
import reviewStyles from '../sass/review.module.scss';

export default () => {
  const { state } = useContext(AppContext);

  return (
    <Layout prevPage="/question-3">
      <section className={panelStyles.container}>
        <h2 className={panelStyles.heading}>Review</h2>
        <p>
          <strong className={reviewStyles.label}>Name:</strong>
          {state.name}
          <Link className={reviewStyles.edit} to="/question-1">edit</Link>
        </p>
        <p>
          <strong className={reviewStyles.label}>Email:</strong>
          {state.email}
          <Link className={reviewStyles.edit} to="/question-2">edit</Link>
        </p>
        <p>
          <strong className={reviewStyles.label}>Service:</strong>
          {state.service}
          <Link className={reviewStyles.edit} to="/question-3">edit</Link>
        </p>
      </section>
    </Layout>
  );
};
