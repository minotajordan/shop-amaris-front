import {
  GetDiscountsRequestPayload,
  GetDiscountsSuccessPayload,
  GetDiscountsFailurePayload
} from './types'

export enum actionDiscountTypes {
  GET_DISCOUNTS_REQUEST = 'discounts/GET_DISCOUNTS_REQUEST',
  GET_DISCOUNTS_SUCCESS = 'discounts/GET_DISCOUNTS_SUCCESS',
  GET_DISCOUNTS_FAILURE = 'discounts/GET_DISCOUNTS_FAILURE',
}

export interface getDiscountsRequestAction {
  type: typeof actionDiscountTypes.GET_DISCOUNTS_REQUEST
  payload?: GetDiscountsRequestPayload
}

interface getDiscountsSuccessAction {
  type: typeof actionDiscountTypes.GET_DISCOUNTS_SUCCESS
  payload: GetDiscountsSuccessPayload
}

interface getDiscountsFailureAction {
  type: typeof actionDiscountTypes.GET_DISCOUNTS_FAILURE
  payload: GetDiscountsFailurePayload
}

export type DiscountsAction = getDiscountsRequestAction | getDiscountsSuccessAction | getDiscountsFailureAction

export const getDiscountsRequest = (id?: GetDiscountsRequestPayload): DiscountsAction => ({
  type: actionDiscountTypes.GET_DISCOUNTS_REQUEST,
  payload: id
})

export const getDiscountsSuccess = (discounts: GetDiscountsSuccessPayload): DiscountsAction => ({
  type: actionDiscountTypes.GET_DISCOUNTS_SUCCESS,
  payload: discounts,
})

export const getDiscountsFailure = (errors: GetDiscountsFailurePayload): DiscountsAction => ({
  type: actionDiscountTypes.GET_DISCOUNTS_FAILURE,
  payload: errors,
})
