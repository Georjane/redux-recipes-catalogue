import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import CategoryFilter from '../components/CategoryFilter';

it('renders CategoryFilter component', () => {
  const tree = renderer.create(<CategoryFilter handleFilterChange={() => {}} />);
  expect(tree).toMatchSnapshot();
});
