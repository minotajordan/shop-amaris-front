import React, {FC, useState} from 'react'
import { Drawer, Space, Button, Alert } from 'antd'
import { useSelector } from 'react-redux'
import {getCarListProducts, getTotalAmount, getTotalAmountPayment} from "src/redux/carShop/selectors"
import { DownloadOutlined } from '@ant-design/icons'
import ItemCar from "src/components/Product/ListCar/ItemCar"

interface Props {
  isPrepaymen: boolean
  setIsPrepaymen: Function
}

const ListCar: FC<Props> = ({isPrepaymen, setIsPrepaymen}) => {
  const carShop = useSelector(getCarListProducts)
  const totalAmount = useSelector(getTotalAmount)
  const totalAmountPayment = useSelector(getTotalAmountPayment)

  return (<>
      <Drawer
        title="Resumen y cupone"
        placement={'right'}
        width={400}
        onClose={() => setIsPrepaymen(false)}
        visible={isPrepaymen}
        extra={
          <Space>
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Procces Pay
            </Button>
          </Space>
        }
      >
        <Alert
          description="This story will continue..."
          type="warning"
        />
      </Drawer>
    </>)}

export default ListCar
