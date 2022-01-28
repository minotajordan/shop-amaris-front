import { all, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects'

import { actionProductTypes } from 'src/redux/product/actions'
import { getProductsRequest } from "src/redux/product/saga";
import { actionDiscountTypes } from "src/redux/discount/actions";
import { getDiscountRequest } from "src/redux/discount/saga";

function* rootSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(actionProductTypes.GET_PRODUCTS_REQUEST, getProductsRequest)])
  yield all([takeLatest(actionDiscountTypes.GET_DISCOUNTS_REQUEST, getDiscountRequest)])
}

export default rootSaga
