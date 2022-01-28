import React, { FC } from 'react'
import styled from 'styled-components'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import ListCar from "src/components/Product/ListCar";

const MainWrapper = styled.div`
  text-align: center;
  padding-bottom: 70px;
`

// you should todo: mock data or fetch actual api to get menu items
const menuTop = [
  {
    key: 100,
    translate: 'menuTop.profile',
    title: 'profile',
    desc: 'profile',
    ico: 'profile',
    pathname: '/profile',
  },
  {
    key: 101,
    translate: 'menuTop.language',
    title: 'language',
    desc: 'language',
    ico: 'lang',
    pathname: '/lang',
  },
]

const menuItems = [
  {
    key: 200,
    translate: 'menu.home',
    title: 'home',
    desc: 'home',
    pathname: '/',
  },
  {
    key: 201,
    translate: 'menu.products',
    title: 'Products',
    desc: 'Products',
    pathname: '/products',
  },
]

const Layout: FC = ({ children }) => (
  <>
    <Header menuItems={menuItems} menuTop={menuTop} />
    <MainWrapper>{children}</MainWrapper>
    <ListCar />
    <Footer />
  </>
)

export default Layout
