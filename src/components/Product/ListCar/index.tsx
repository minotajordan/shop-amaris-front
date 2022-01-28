import React, {FC, useState} from 'react'
import {Drawer, Space, Button, Alert} from 'antd'
import ActionCard from "./ActionCar"
import { useSelector } from 'react-redux'
import { getCarListProducts, getTotalAmount, getTotalAmountPayment, getTotalDiscountBrand } from "src/redux/carShop/selectors"
import { ShoppingOutlined } from '@ant-design/icons'
import ItemCar from "src/components/Product/ListCar/ItemCar"
import PrePaymen from "../../Payment/PrePaymen"

const ListCar: FC = () => {
  const carShop = useSelector(getCarListProducts)
  const totalAmount = useSelector(getTotalAmount)
  const totalAmountPayment = useSelector(getTotalAmountPayment)
  const [show, setShow] = useState(false);
  const [isPrepaymen, setIsPrepaymen] = useState(false);
  const discountBrand = (useSelector(getTotalDiscountBrand))
  const [aplyDiscountBrand] = discountBrand && discountBrand.filter(item => item.isDiscount)
  const [remainingDiscount] = discountBrand && discountBrand.filter(item => !item.isDiscount)

  return (<>
      <ActionCard setShow={setShow} totalAmount={totalAmount} />
      <Drawer
        title="Products ready to deliver"
        placement={'right'}
        width={500}
        onClose={() => setShow(false)}
        visible={show}
        extra={
          <Space>
            <Button
              type="primary"
              shape="round"
              icon={<ShoppingOutlined />}
              onClick={() => setIsPrepaymen(true)}
            >
              Pay $ { aplyDiscountBrand?.isDiscount ? (totalAmountPayment - aplyDiscountBrand?.discount) : totalAmountPayment}
            </Button>
          </Space>
        }
      >
        { aplyDiscountBrand?.isDiscount &&
        <Alert
          message="Descuento disponible"
          description={`Tu compra supero el monto requerido en referencia a ${aplyDiscountBrand?.brand}, acabamos de aplicar un descuento de $ ${aplyDiscountBrand?.discount}`}
          type="success"
          showIcon
        />
        }

        {
          remainingDiscount?.remainingDiscount < 0 &&
          <Alert
            message={`Solo te falta completar $ ${remainingDiscount?.remainingDiscount*-1} en productos de la referencia ${remainingDiscount?.brand}, para aplicar descuento de $ ${remainingDiscount?.discount} `}
            style={{marginTop: '10px'}}
            type="info"
            showIcon
          />
        }

        <br />
        <ItemCar carShop={carShop} />
        <PrePaymen isPrepaymen={isPrepaymen} setIsPrepaymen={setIsPrepaymen}/>
      </Drawer>
    </>)}

export default ListCar
