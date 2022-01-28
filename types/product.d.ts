declare namespace ProductGlobal {
  interface Product {
    id: number
    name?: string
    brand: string
    description: string
    image?: string
    price: number
    amount: number
  }

  interface Discounts {
    _id: string
    brand: string
    threshold: number
    discount: number
  }

  interface Products {
    isLoading: boolean
    products: [Product] | [] }

  interface ProductsState {
    products?: [Product] | any
    discounts?: [Discounts] | any
    isLoading: boolean
    errors: Errors
  }
  interface ProductsInitial { }
}
