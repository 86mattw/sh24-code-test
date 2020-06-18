import React from 'react';
import AppWrapper from './src/components/app-wrapper';

export const wrapRootElement = ({ element }) => (
  <AppWrapper>
    {element}
  </AppWrapper>
);
