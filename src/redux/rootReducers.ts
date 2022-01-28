import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import * as carShop from 'src/redux/carShop'
import * as product from 'src/redux/product'
import * as discount from 'src/redux/discount'
import { ProductsAction } from './product/actions'

const rootReducer = combineReducers({
  carShop: carShop.reducers,
  product: product.reducers,
  discount: discount.reducers
})

export type RootAction = ProductsAction

const reducer = (state, action): { carShop: CarShopGlobal.CarShopState; product: ProductGlobal.ProductsState; discount: DiscountGlobal.DiscountsState } => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    default:
      return rootReducer(state, action)
  }
}

export default reducer
