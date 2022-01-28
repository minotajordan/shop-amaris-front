import React, { FC } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import TopNavMenu from './TopNavMenu'

interface Props {
  menuItems: MenuGlobal.MenuItem[],
  menuTop: MenuGlobal.MenuTop[]
}

const HeaderWrapper = styled.header`
  padding: 0 0px;
`

const Header: FC<Props> = ({ menuItems, menuTop }) => (
  <HeaderWrapper>
    <TopNavMenu menuTop={menuTop} />
    <NavMenu menuItems={menuItems} />
  </HeaderWrapper>
)

export default Header
