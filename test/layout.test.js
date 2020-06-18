import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';

import Layout from '../src/components/layout';

describe('the Layout component', () => {
  it('renders its children', () => {
    const wrapper = shallow(<Layout><p>child text</p></Layout>);

    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('renders a previous page link when one is given', () => {
    const wrapper = shallow(<Layout prevPage="test-prev-page">children</Layout>);
    const link = wrapper.find(Link);

    expect(link).toHaveLength(1);
    expect(link.props().to).toEqual('test-prev-page');
  });

  it('does not render a next page link when one is given but not enabled', () => {
    const wrapper = shallow(<Layout nextPage="test-next-page">children</Layout>);
    const link = wrapper.find(Link);

    expect(link).toHaveLength(0);
  });

  it('renders a next page link when one is given and is enabled', () => {
    const wrapper = shallow(<Layout nextPage="test-next-page" nextEnabled>children</Layout>);
    const link = wrapper.find(Link);

    expect(link).toHaveLength(1);
    expect(link.props().to).toEqual('test-next-page');
  });
});
