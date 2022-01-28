import {
  GetProductsRequestPayload,
  GetProductsSuccessPayload,
  GetProductsFailurePayload
} from './types'

export enum actionProductTypes {
  GET_PRODUCTS_REQUEST = 'carShop/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'carShop/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = 'carShop/GET_PRODUCTS_FAILURE',
}

export interface getProductsRequestAction {
  type: typeof actionProductTypes.GET_PRODUCTS_REQUEST
  payload?: GetProductsRequestPayload
}

interface getProductsSuccessAction {
  type: typeof actionProductTypes.GET_PRODUCTS_SUCCESS
  payload: GetProductsSuccessPayload
}

interface getProductsFailureAction {
  type: typeof actionProductTypes.GET_PRODUCTS_FAILURE
  payload: GetProductsFailurePayload
}

export type ProductsAction = getProductsRequestAction | getProductsSuccessAction | getProductsFailureAction

export const getProductsRequest = (id?: GetProductsRequestPayload): ProductsAction => ({
  type: actionProductTypes.GET_PRODUCTS_REQUEST,
  payload: id
})

export const getProductsSuccess = (products: GetProductsSuccessPayload): ProductsAction => ({
  type: actionProductTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
})

export const getProductsFailure = (errors: GetProductsFailurePayload): ProductsAction => ({
  type: actionProductTypes.GET_PRODUCTS_FAILURE,
  payload: errors,
})
