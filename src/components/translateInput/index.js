import React from 'react'
import styled from 'styled-components'
import ReactCountryFlag from "react-country-flag"
import { UserContext } from '../UserProvider'
import Layout from '../../container/Layout.jsx'


function TranslateInput (props) {
  // const {Holi} = React.useContext(UserContext);
  const prueba = props.epa 

  return (
    <Container>
    <ReactCountryFlag className="emojiFlag" countryCode="DE" aria-label="English"
    style={{fontSize: '2em',lineHeight: '2em'}} svg/> 
    <Input type="text" placeholder={prueba}/>
   
    {/* <Holi/>  */}
   
    </Container>
  )
}
export default TranslateInput

const Input = styled.input`
    width: 85vw;
    height: 8vh;
    margin-top: 5vh;
    text-align: center;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1.5rem;
    border-radius: 45px;
    
`
const Container = styled.div`                   
height: 100%;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`