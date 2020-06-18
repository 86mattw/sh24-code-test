import React from 'react';
import { Link } from 'gatsby';

export default ({ children, nextPage, prevPage, nextEnabled }) => (
  <div>
    <h1>Order</h1>
    {children}

    {prevPage && (<Link to={prevPage} >Back</Link>)}
    {nextEnabled && nextPage && (<Link to={nextPage} >Next</Link>)}
  </div>
);
