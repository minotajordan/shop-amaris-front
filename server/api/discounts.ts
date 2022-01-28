import { AxiosResponse } from 'axios'
import request from 'src/utils/request'

export const getDiscounts = (id?: number): Promise<AxiosResponse<DiscountGlobal.Discounts>> =>
  request.get(`/discounts`)
