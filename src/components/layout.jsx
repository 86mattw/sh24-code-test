import React from 'react';
import { string, bool, node } from 'prop-types';
import { Link } from 'gatsby';

const Layout = ({
  children,
  nextPage,
  prevPage,
  nextEnabled,
}) => (
  <div>
    <h1>Order</h1>
    {children}

    {prevPage && (<Link to={prevPage}>Back</Link>)}
    {nextEnabled && nextPage && (<Link to={nextPage}>Next</Link>)}
  </div>
);

Layout.defaultProps = {
  nextPage: null,
  prevPage: null,
  nextEnabled: false,
};

Layout.propTypes = {
  children: node.isRequired,
  nextPage: string,
  prevPage: string,
  nextEnabled: bool,
};

export default Layout;
