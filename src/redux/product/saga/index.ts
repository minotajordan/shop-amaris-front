import { call, put } from 'redux-saga/effects'
import { getProducts } from 'server/api/products'

import { getProductsSuccess, getProductsFailure, getProductsRequestAction} from '..'

export function* getProductsRequest({ payload }: getProductsRequestAction) {
  try {
    const data = yield call(getProducts)
    yield put(getProductsSuccess({ products: data.data }))
  } catch (errors) {
    yield put(getProductsFailure({ errors: 'error' }))
  }
}
