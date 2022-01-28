declare namespace Store {
  interface State {
    carShop: CarShopGlobal.CarShopState | any
    product: ProductGlobal.Products | any
    discount: DiscountGlobal.DiscountsState | any
  }
  type RootState = State
}
