import React, {FC} from 'react'
import { Button, Badge, Avatar, Skeleton, Input, List } from 'antd'
import Handlers from "src/components/Product/handlers";
import {useDispatch} from "react-redux";
import {MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";

interface Props {
  carShop: CarShopGlobal.CarShopState | any
}

const listCar: FC<Props> = ({ carShop }) => {
  const { onUpdateCarListProduct } = Handlers(useDispatch())
  const addListCar = (data) => {
    const tempAmount = data?.amount + 1
    onUpdateCarListProduct({...data, amount: tempAmount})
  }

  const removeListCar = (data) => {
    const tempAmount = data?.amount - 1
    onUpdateCarListProduct({...data, amount: tempAmount})
  }

  return (<>
    <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      dataSource={(carShop?.carShopList?.products).sort((a, b) => b.price - a.price)}
      renderItem={(item: ProductGlobal.Product) => (
        <List.Item actions={[]} >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              avatar={<span className="avatar-item">
                <Badge count={item.amount}>
                  <Avatar shape="square" src={"https://" + item?.image} size={64} />
                </Badge>
              </span>}
              title={<a href="https://ant.design">{item?.name || 'Produc name'}</a>}
              description={<><p style={{margin: "0px"}}>{item?.description}</p><p style={{color: "#1990ff", margin: "0px", fontWeight: "600",}}>{item?.brand}</p></>}
            />
            <div style={{ width: '100px' }}>
              <div style={{ width: '100%' }}>
                <Button
                  style={{ margin: '3px' }}
                  onClick={() => removeListCar(item)}
                  shape="circle"
                  icon={<MinusCircleOutlined />}
                />
                <Input
                  hidden={true}
                  style={{ width: "40px" }}
                  value={item?.amount}
                  onChange={() => addListCar(item)}
                />
                <Button
                  style={{ margin: '3px' }}
                  onClick={() => addListCar(item)}
                  shape="circle"
                  icon={<PlusCircleOutlined />}
                />
              </div>
            </div>
            <div style={{ width: '130px', textAlign: "end" }}>
              <p className={'color-normal'} style={{ margin: "0px", fontWeight: 600 }}>
                $ { (item?.price) * (item?.amount) }
                <span>
                  TOTAL
                </span>
              </p>
              <p className={'color-basic'} style={{ margin: "0px", fontWeight: 400, fontSize: "13px" }}>
                $ {item?.price}
                <span>
                  UNI
                </span>
              </p>
            </div>
          </Skeleton>
        </List.Item>
        )}
      />
  </>)}

export default listCar
