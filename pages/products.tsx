import React from 'react'
import { Row, Col } from 'antd'
import { NextPage, GetStaticProps } from 'next'
import { useTranslation } from 'react-i18next'
import ProductContainer from 'src/containers/ProductContainer'
import { Title } from 'src/components/common'

const ProductsPage: NextPage= () => {
  const { t } = useTranslation()
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title>{t('products.title')}</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ProductContainer/>
        </Col>
      </Row>
    </div>
  )
}

export default ProductsPage
