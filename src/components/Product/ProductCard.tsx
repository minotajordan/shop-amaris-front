import React, {FC, useEffect, useState} from 'react'
import Image from 'next/image'
import { Input, Card, Button, Avatar, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import {useDispatch} from "react-redux";
import Handlers from './handlers'

interface Props {
  carShop: CarShopGlobal.CarShopState | any
  id: Number
  brand: String
  description: String
  image?: String
  price: Number
  productCarList?: any
}

const ProductCard: FC<Props> = ({carShop, productCarList, id, brand, description, image, price }) => {
  const [amount, setAmount] = useState(0)
  const { Meta } = Card
  const { onUpdateCarListProduct } = Handlers(useDispatch())

  const addListCar = (data) => {
    const tempAmount = amount + 1
    setAmount(tempAmount)
    onUpdateCarListProduct({...data, amount: tempAmount})
  }

  const removeListCar = (data) => {
    const tempAmount = amount - 1
    setAmount(tempAmount)
    onUpdateCarListProduct({...data, amount: tempAmount})
  }

  useEffect(() => {
    // @ts-ignore
    [productCarList] = Object.values(carShop.carShopList.products).filter(productList => productList?.id === id) || []
    if(productCarList?.amount) {
      setAmount(productCarList?.amount)
    } else {
      setAmount(0)
    }
  }), [carShop]

  return (
    <>
      <Card
        style={{ width: 190, marginBottom: "20px", display: "inline-grid", backgroundColor: "#f0f0f0", borderRadius: "10px 10px 10px 10px" }}
        cover={
          <Image
            alt="example"
            width={300}
            layout="responsive"
            height={300}
            src={'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg'}
          />
        }
        actions={[<div>
          { amount > 0 ?
            <div style={{ width: '100%' }}>
              <Button
                onClick={() => removeListCar({ id, brand, description, image, price, amount })}
                shape="circle"
                icon={<MinusCircleOutlined />}
              />
              <Input value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} style={{ width: "50px" }} />
              <Button
                onClick={() => addListCar({ id, brand, description, image, price, amount })}
                shape="circle"
                icon={<PlusCircleOutlined />} />
            </div> :
            <Button
              style={{width: '90%', borderRadius: '10px'}}
              type="primary"
              icon={<PlusCircleOutlined />}
              loading={false}
              onClick={() => addListCar({ id, brand, description, image, price })}
            >
              Add to car
            </Button>
          }
        </div>]}
      >
        <Meta
          title={
            <div style={{textAlign: "left"}}>
              <Row>
                <Col span={18}>
                  <p style={{marginBottom: "0px"}}>{brand}</p>
                  <p style={{marginBottom: "0px"}}>$ {price}</p>
                </Col>
                <Col span={6}>
                  <Avatar src={image} />
                </Col>
              </Row>
            </div>
          }
          description={<p style={{height: '30px', textAlign: "left"}} >{description}</p>}
        />
      </Card>
    </>
  )}

export default ProductCard
