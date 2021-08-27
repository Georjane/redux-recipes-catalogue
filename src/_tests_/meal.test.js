import React from 'react';
import renderer from 'react-test-renderer';
import Meal from '../components/Meal';

it('renders meal page', () => {
  const strMeal = 'Chicken soup';
  const strMealThumb = 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg';
  const tree = renderer.create(<Meal meal={strMeal, strMealThumb } />);
  expect(tree).toMatchSnapshot();
});
