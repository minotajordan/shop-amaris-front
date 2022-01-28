export interface GetDiscountsRequestPayload {
  id: DiscountGlobal.Discounts['_id']
}

export interface GetDiscountsSuccessPayload {
  discounts?: DiscountGlobal.DiscountsState
}

export interface GetDiscountsFailurePayload {
  errors: Errors | any
}

export type Payload = GetDiscountsRequestPayload | GetDiscountsSuccessPayload | GetDiscountsFailurePayload
