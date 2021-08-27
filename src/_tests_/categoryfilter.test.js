import React from 'react';
import renderer from 'react-test-renderer';
import CategoryFilter from '../components/CategoryFilter';
import { expect } from '@jest/globals';
// import { render, screen } from '@testing-library/react';
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
// test('has correct welcome text', () => {
//   render(<MealList />);
//   expect(screen.getByRole('heading')).toHaveTextContent('Welcome To Our Catalogue of Recipes')
// });
import { createStore, applyMiddleware } from 'redux';
import filterReducer from '../reducers/filter';
import apiMiddleware from '../redux/apimiddleware';

it('renders App page', () => {
  const tree = renderer.create(<CategoryFilter handleFilterChange={()=>{}} />);
  expect(tree).toMatchSnapshot();
});
