type CarShopState = CarShopGlobal.CarShopState

export const initialState: CarShopState = {
  carShopList: { products: [] },
  isLoading: false,
  errors: [],
}


export default initialState
