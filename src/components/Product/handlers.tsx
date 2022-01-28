// @actions
import { addCarShopRequest } from "src/redux/carShop/actions";

export const Handlers = (dispatch) => {
  const onUpdateCarListProduct = (data) => {
    dispatch(addCarShopRequest(data))
    return [{a: 1, b: 2}, data]
  }
  return { onUpdateCarListProduct }
}

export default Handlers
