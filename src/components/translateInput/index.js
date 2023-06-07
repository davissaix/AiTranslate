import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import ReactCountryFlag from "react-country-flag"
import { UserContext } from '../UserProvider'



function TranslateInput () {
  
  const {LangSelected} = React.useContext(UserContext);
  // const {translate} = React.useContext(UserContext);
  return (
    <Container>
      <Container2>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[0]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[1]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[2]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[3]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[4]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[5]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[6]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[7]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[8]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/>
        <ReactCountryFlag className="emojiFlag" countryCode={LangSelected[9]} aria-label="English"
        style={{fontSize: '2em',lineHeight: '2em'}} svg/> 
      </Container2>
      <Input type="text" placeholder= 'What do you want to translate?'/>
      {/* {translate()} */}
      <Button>Translate</Button>
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
justify-content: space-between;
align-items: center;
`
const Container2 = styled.div`                   
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    width: 140px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #b0afaf;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    }
  
  &:hover {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

`