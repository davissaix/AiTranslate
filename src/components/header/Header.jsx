import React from 'react'
import polyTranslate from '../../assets/PolyTranslate.png'
import { ViewPort } from './styles'

const Header = () => {
  return (
    <div>
        <ViewPort src={polyTranslate} alt='logo-polyTranslate'/>
    </div>
  )
}

export default Header