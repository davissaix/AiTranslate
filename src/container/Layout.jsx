import React from 'react'
import CountryFlags from '../components/CountryFlags'

import { ViewPort } from './styles'




const Layout = () => {
  return (
    <ViewPort className= 'layout'>
      <CountryFlags/>
    </ViewPort>
  )
}

export default Layout