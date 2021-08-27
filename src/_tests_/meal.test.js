import React from 'react';
import renderer from 'react-test-renderer';
import Meal from '../components/Meal';

it('renders meal page', () => {
  const strMeal = 'Chicken soup';
  const tree = renderer.create(<Meal meal={strMeal} />);
  expect(tree).toMatchSnapshot();
});
