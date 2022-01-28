import { expect } from 'chai';
import {reducers} from './reducers';
test('validate iteration data payload reducers carShop', () => {
  let state;
  const initialState = {
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
  state = reducers(initialState, {
    type:'carShop/ADD_CARSHOP_REQUEST',
    payload:{
      amount: 1,
      brand:'Marca2',
      description:'Refrigerador',
      id:4,
      image:'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
      price:20000,
    }
  });
  expect(state).to.deep.equal(initialState);
});
