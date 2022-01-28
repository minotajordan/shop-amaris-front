export interface GetProductsRequestPayload {
  id: ProductGlobal.Product['id']
}

export interface GetProductsSuccessPayload {
  products?: ProductGlobal.Product
}

export interface GetProductsFailurePayload {
  errors: Errors | any
}

export type Payload = GetProductsRequestPayload | GetProductsSuccessPayload | GetProductsFailurePayload
