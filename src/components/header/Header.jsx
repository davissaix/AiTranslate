import React from 'react'
import polyTranslate from '../../assets/PolyTranslate.png'
import { ViewPort, Container } from './styles'

const Header = () => {
  return (
    <div>
      <Container>
        <ViewPort src={polyTranslate} alt='logo-polyTranslate'/>
      </Container>
    </div>
  )
}

export default Header