import { actionTypes, CarListAction } from './actions'
import initialState from './initialState'
type CarShopState = CarShopGlobal.CarShopState

export const reducers = (state: any, action: {type, payload}): CarShopState => {
  const { type, payload } = action
  const data = payload
  const dataState = state?.carShopList?.products
  let dataFilter = dataState?.filter(item => item?.id !== data?.id ) || [];
  dataFilter = dataFilter?.filter(item => item?.amount > 0 )

  switch (type) {
    case actionTypes.ADD_CARSHOP_REQUEST:
      return {
        ...state,
        carShopList: { products: payload?.amount > 0 ? [data, ...dataFilter] : [...dataFilter]},
        isLoading: true,
        errors: [],
      }
    default:
      return initialState
  }
}
