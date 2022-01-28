declare namespace DiscountGlobal {
  interface Discounts {
    _id: string
    brand: string
    threshold: number
    discount: number
  }

  interface DiscountsState {
    discounts?: [Discounts] | any
    isLoading: boolean
    errors: Errors
  }
}
