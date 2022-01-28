declare namespace CarShopGlobal {
  interface StructureProducts {
      id: number
      brand: string
      description: string
      image?: string
      price: number
      amount: number
    }

  interface Products { products: [StructureProducts] }

  interface CarShopState {
    carShopList: Products | { products: [data, ...dataFilter] } | { products: [] }
    isLoading: boolean
    errors: Errors
  }
}

