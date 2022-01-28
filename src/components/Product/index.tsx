import React, {FC, useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import ProductCard from './ProductCard'
import { Row, Col, Card, Badge } from "antd";
import { getProductsRequest } from 'src/redux/product/actions'
import { getDiscountsRequest } from 'src/redux/discount/actions'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalDiscountBrand } from "src/redux/carShop/selectors"

const Intro = styled.div`
  font-size: 16px;
  padding: 20px;
`

const ProductList: FC = () => {
  const { t } = useTranslation()
  const { Meta } = Card
  const tempProducts = useSelector((state: Store.RootState) => state.product)
  const carShop = useSelector((state: Store.RootState) => state.carShop)
  const dispatch = useDispatch()
  const [discountBrand] = useSelector(getTotalDiscountBrand)

  useEffect(() => {
    if (tempProducts.products.length === 0 || !tempProducts) {
      dispatch(getProductsRequest())
      dispatch(getDiscountsRequest())
    }
  }, [])

  return (
    <>
      <Row>
        <Col span={24}>
          <Intro>{t('products.intro')}</Intro>
        </Col>
      </Row>
      <Row>
        { tempProducts.isLoading ? [0,1,2,3,4,5,6,7,8,9,10,11].map( (index) => (
          <Card style={{ width: 230, marginTop: 16 }} loading={tempProducts.isLoading} key={index}>
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
        )) : // @ts-ignore
          tempProducts?.products?.products?.map(item => (
            discountBrand?.brand === item.brand && discountBrand?.discount
             ?  <Col md={6} xs={12} sm={8} lg={4} key={Number(item.id)}>
                  <Badge.Ribbon text={'Descuento'}>
                    <ProductCard carShop={carShop} id={item.id} brand={item.brand} price={item.price} image={item.image} description={item.description}/>
                  </Badge.Ribbon>
                </Col>
             : <Col md={6} xs={12} sm={8} lg={4} key={Number(item.id)}>
                <ProductCard carShop={carShop} id={item.id} brand={item.brand} price={item.price} image={item.image} description={item.description}/>
              </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductList
