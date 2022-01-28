import React, { FC } from 'react'
import { Menu, Input } from 'antd'
import { useRouter } from 'next/router'
import Link from 'src/components/Link'
import { useTranslation } from 'react-i18next'

const { Search } = Input;

interface Props {
  menuItems: MenuGlobal.MenuItem[]
}

const NavMenu: FC<Props> = ({ menuItems }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Menu style={{width: '100%'}} mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[router.pathname]}>
      {menuItems?.map(item => (
        <Menu.Item key={item.key}>
          <Link href={item.pathname}>{t(item.translate)}</Link>
        </Menu.Item>
      ))}
      <Menu.Item
        style={{ width: '50%' }}
      >
        <Search
          placeholder="input search text"
          allowClear
          onSearch={(e) => console.log(e)}
          style={{ width: '100%', marginTop: '6px', borderRadius: '10px' }}
        />
      </Menu.Item>
    </Menu>
  )
}
export default NavMenu
