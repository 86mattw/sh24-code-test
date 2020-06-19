import React from 'react';
import { string, bool, node } from 'prop-types';
import { Link } from 'gatsby';

import '../sass/layout.scss';
import navStyles from '../sass/navigation.module.scss';

const Layout = ({
  children,
  nextPage,
  prevPage,
  nextEnabled,
}) => (
  <div className="container">
    <h1>Your Order</h1>
    {children}

    <nav className={navStyles.container}>
      {prevPage && (
        <Link className={navStyles.link} to={prevPage}>
          &lt;&nbsp;&nbsp;Back
        </Link>
      )}
      {nextEnabled && nextPage && (
        <Link className={[navStyles.link, navStyles.next].join(' ')} to={nextPage}>
          Next&nbsp;&nbsp;&gt;
        </Link>
      )}
    </nav>
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
