import React from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Link from 'src/components/Link'
import { Title } from 'src/components/common'

const CoreTitle = styled(Title)`
  margin: 40px 0;
  font-weight: 700;
`

const LinkButton = styled(Button)`
  margin-right: 20px;
`

const Home: NextPage = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es_ES' ? 'en_US' : 'es_ES')
  }
  return (
    <div>
      <CoreTitle>Test Code - Amaris 2022</CoreTitle>
      <LinkButton>
        <Link href="/products">{t('home.products')}</Link>
      </LinkButton>
      <Button onClick={changeLanguage}>{t('home.change_lang')}</Button>
    </div>
  )
}
export default Home
