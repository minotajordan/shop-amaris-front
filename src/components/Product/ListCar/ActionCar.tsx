import React, {FC} from 'react'
import { Badge, Avatar } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

interface Props {
  setShow: Function
  totalAmount: any
}

const ActionCard: FC<Props> = ({setShow, totalAmount}) => {
  return (<>
    <div style={{
      position: "fixed",
      top: "60px",
      alignContent: "end",
      marginLeft: "calc(100% - 40px)",
      cursor: 'pointer'
    }}
         onClick={() => setShow(true)} >
      <Badge size="default" count={totalAmount} style={{right: "40px"}}>
        <Avatar shape="square" size="large" >
          <ShoppingCartOutlined />
        </Avatar>
      </Badge>
    </div>
  </>)}

export default ActionCard
