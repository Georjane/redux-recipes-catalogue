import React from 'react';
import renderer from 'react-test-renderer';
import CategoryFilter from '../components/CategoryFilter';
import { expect } from '@jest/globals';

it('renders CategoryFilter component', () => {
  const tree = renderer.create(<CategoryFilter handleFilterChange={()=>{}} />);
  expect(tree).toMatchSnapshot();
});
