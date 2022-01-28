import { AxiosResponse } from 'axios'
import request from 'src/utils/request'

export const getProducts = (id?: number): Promise<AxiosResponse<ProductGlobal.Products>> =>
  request.get(`/products`)
