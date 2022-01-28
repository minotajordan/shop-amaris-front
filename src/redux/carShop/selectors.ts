export const getCarListProducts = (state: Store.RootState) => state.carShop

export const getTotalAmount = (state: Store.RootState) => {
  const products = (state.carShop.carShopList.products)
  const result: any = (products.length > 0) && Object.values(products).reduce((a: any, b: any ) =>
    Number(a?.amount || a) + Number(b.amount), 0) || 0
  return result?.amount || result
}

export const getTotalAmountPayment = (state: Store.RootState) => {
  const products = (state.carShop.carShopList.products)
  const result: any = (products.length > 0) && Object.values(products).reduce((a: any, b: any ) =>
    Number(((a?.amount * a?.price) || a)) + Number((b.amount * b.price)), 0) || 0
  return result?.amount || result
}
/** @todo process enable for totalProduct Discount future
export const getTotalProduct = (state: Store.RootState) => {
  const products = (state.carShop.carShopList.products)
  const discounts = (state.discount.discounts.discounts)
  (products.length > 0) && Object.values(products).reduce((acc, curr) => {
    if(!acc[curr.brand]) acc[curr.brand] = [];
    const [mergeDiscount] = (discounts).filter((item) => (item.brand === curr.brand))
    acc[curr.brand].push({
      amount: curr.amount,
      price: curr.price,
      total: curr.amount * curr.price,
      threshold: mergeDiscount.threshold,
      discount: mergeDiscount.discount,
      isDiscount: (Number(mergeDiscount.threshold) <= Number(curr.amount * curr.price))
    });
    return acc;
  },{});
}
*/
export const getTotalDiscountBrand = (state: Store.RootState | any) => {
  const products = (state.carShop.carShopList.products)
  const discounts = (state.discount.discounts.discounts)

  let mergeBrandDiscount: any[] = [];

  (products.length > 0) && Object.values(products).reduce((acc: any, curr: any) => {
    if(!acc[curr.brand]) acc[curr.brand] = [];
    const [mergeDiscount] = (discounts).filter((item) => (item.brand === curr.brand))
    const dataDiscount = {
      threshold: mergeDiscount?.threshold || false,
      discount: mergeDiscount?.discount || false,
    }
    const total = (curr.amount * curr.price)
    if (mergeBrandDiscount.length === 0) {
      mergeBrandDiscount = [{
        brand: curr.brand,
        total,
        isDiscount: dataDiscount.threshold && (dataDiscount.threshold) <= (total),
        remainingDiscount: (total - dataDiscount.threshold) > 0 ? 0 : total - dataDiscount.threshold,
        ...dataDiscount
      }]
    }
    else {
      let flag = false
      mergeBrandDiscount = mergeBrandDiscount.map(item => {
        if (item.brand === curr.brand) {
          flag = true
          const totalFind = total + item.total
          return {
            brand: curr.brand,
            total: totalFind,
            isDiscount: dataDiscount.threshold && (dataDiscount.threshold) <= totalFind + item.total,
            remainingDiscount: (totalFind - dataDiscount.threshold) > 0 ? 0 : totalFind - dataDiscount.threshold,
            ...dataDiscount
          }
        } else {
          return item
        }
      })
      if (!flag) {
        mergeBrandDiscount = [...mergeBrandDiscount, {
          brand: curr.brand,
          total,
          isDiscount: dataDiscount.threshold && (dataDiscount.threshold) <= Number(total),
          remainingDiscount: (total - dataDiscount.threshold) > 0 ? 0 : total - dataDiscount.threshold,
          ...dataDiscount
        }]
      }
    }

    acc[curr.brand].push({
      amount: curr.amount,
      price: curr.price,
      total: curr.amount * curr.price,
    });
    return acc;
  },{});

  return mergeBrandDiscount.sort((a, b) => (a.discount && a.discount > b.discount) ? 1 : -1).reverse()

}
