/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ProductCard from "./ProductCard";
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { createStore } from 'redux';
import initialState from '../../redux/carShop/initialState'
import { addCarShopRequest } from "src/redux/carShop/actions";
import rootReducer from 'src/redux/rootReducers'
import { render, screen } from "@testing-library/react";


describe('dispatch mock', function(){
  it('validate data storege', function(){
    //store
    const store = createStore(rootReducer, {
      carShop: initialState,
      product: initialState,
      discount: initialState
    });
    //action
    const action = addCarShopRequest({
      carShopList: { products: [] },
      isLoading: false,
      errors: [],
    });

    store.dispatch(action);
    const actual = store.getState().carShop
    const expected1 = {
      carShopList: {
        products: []},
        errors: [],
        isLoading: true
    }
    expect(actual).to.deep.equal(expected1);
  })
});


describe('Render data redux check component', () => {

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  it('Enable button in screen"', () => {
    const state = {
      brand: 'brand',
      price: 100,
      description: 'desc',
      amount: 1,
      id: 1,
    }
    const store = createStore(rootReducer, {
      carShop: initialState,
      product: initialState,
      discount: initialState
    });

    const carShop = {
      carShopList: { products: [{
          amount: 1,
          brand:'Marca2',
          description:'Refrigerador',
          id:4,
          image:'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
          price:20000,
        }] },
      errors: [],
      isLoading: true
    }
    render(
      <Provider store={store}>
        <ProductCard carShop={carShop} id={state.id} brand={state.brand} price={state.price} description={state.description} />
      </Provider>
    );

    screen.getByText("Add to car");
  });
});
