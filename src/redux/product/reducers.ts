import { actionProductTypes, ProductsAction } from './actions'
type ProductsState = ProductGlobal.ProductsState

export const initialState: ProductsState = {
  products: [],
  isLoading: false,
  errors: [],
}

export const reducers = (state: ProductsState = initialState, action: ProductsAction): ProductsState => {
  const { type, payload } = action
  switch (type) {
    case actionProductTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: [],
      }
    case actionProductTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        errors: [],
      }
    case actionProductTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
