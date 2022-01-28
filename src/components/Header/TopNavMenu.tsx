import React, { FC } from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

interface Props {
  menuTop: MenuGlobal.MenuTop[]
}

const TopNavMenu: FC<Props> = ({ menuTop }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['/']}
      selectedKeys={[router.pathname]}
      className={'top-nav'}
    >
      <img src={'https://www.lider.cl/images/logo.svg'} className={'top-nav-logo'} />
    </Menu>
  )
}
export default TopNavMenu
