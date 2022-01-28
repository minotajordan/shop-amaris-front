import React, { FC } from 'react'
import { Card } from 'antd'

// @todo pending add search filter component
// interface Props { products: ProductGlobal.Product[] } pending definition

const FilterContainer: FC = (props) => (
  <>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
)

export default FilterContainer
