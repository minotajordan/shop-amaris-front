import { call, put } from 'redux-saga/effects'
import { getDiscounts } from 'server/api/discounts'

import { getDiscountsSuccess, getDiscountsFailure, getDiscountsRequestAction} from '..'

export function* getDiscountRequest({ payload }: getDiscountsRequestAction) {
  try {
    const data = yield call(getDiscounts)
    yield put(getDiscountsSuccess({ discounts: data.data }))
  } catch (errors) {
    yield put(getDiscountsFailure({ errors: 'error' }))
  }
}
