import { expect } from '@jest/globals';
// import { render, screen } from '@testing-library/react';
import MealList from '../containers/MealList';
import App from '../components/App';
import React from 'react'
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

const renderWithRedux = (
  component,
  { store = createStore(filterReducer, applyMiddleware(apiMiddleware)) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
describe('<MealList />', () => {

test('has correct welcome text', () => {
  renderWithRedux(<MealList />)
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome To Our Catalogue of Recipes')
})

test('correctly displays categories filter option', () => {
  renderWithRedux(<MealList />)
  expect(screen.getByLabelText('Choose')).toHaveDisplayValue(["CATEGORIES"])
})


test('does not filter a category on initial render', () => {
  renderWithRedux(<MealList />)
  expect(screen.getByLabelText('Choose')).not.toHaveDisplayValue(["Beef"])
})

test('displays meal list in grid form', () => {
  renderWithRedux(<MealList />)
  expect(screen.getByTestId('gridcon')).toHaveClass('grid-container')
})
// it('should take a snapshot', () => {
//   const { asFragment } = render(<App />)
  
//   expect(asFragment(<App />)).toMatchSnapshot()
//  });
})