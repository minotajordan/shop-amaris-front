import {
  AddCarShopRequestPayload,
} from './types'

export enum actionTypes {
  ADD_CARSHOP_REQUEST = 'carShop/ADD_CARSHOP_REQUEST',
}

export interface addCarShopRequestAction {
  type: typeof actionTypes.ADD_CARSHOP_REQUEST
  payload: AddCarShopRequestPayload
}

export type CarListAction = addCarShopRequestAction

export const addCarShopRequest = (carShop: any): CarListAction => ({
  type: actionTypes.ADD_CARSHOP_REQUEST,
  payload: carShop
})
