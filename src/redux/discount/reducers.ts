import { actionDiscountTypes, DiscountsAction } from './actions'
import initialState from './initialState'
type DiscountState = DiscountGlobal.DiscountsState

export const reducers = (state: DiscountState = initialState, action: DiscountsAction): DiscountState => {
  const { type, payload } = action
  switch (type) {
    case actionDiscountTypes.GET_DISCOUNTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: [],
      }
    case actionDiscountTypes.GET_DISCOUNTS_SUCCESS:
      return {
        ...state,
        discounts: payload,
        isLoading: false,
        errors: [],
      }
    case actionDiscountTypes.GET_DISCOUNTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
