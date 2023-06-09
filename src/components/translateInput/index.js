import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactCountryFlag from "react-country-flag";
import { UserContext } from '../UserProvider';
import LanguageFlags from '../LanguageFlags';
import DropDown from '../DropDown';

async function translateText(text) {
  const options = {
    method: 'GET',
    url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
    params: {
      langpair: 'en|it',
      q: text,
      mt: '1',
      onlyprivate: '0',
      de: 'a@b.c',
    },
    headers: {
      'X-RapidAPI-Key': '3730f2a775msh0140bb14ad28e72p170f94jsn65f4586c35c4',
      'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    // Do something with the translation response, such as updating the state or displaying it in your component
  } catch (error) {
    console.error(error);
  }
}

function TranslateInput() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslateClick = async () => {
    await translateText(inputText);
  };

  const { LangSelected } = React.useContext(UserContext);

  const countryFlags = LangSelected.map((country, index) => (
      
      <ReactCountryFlag 
      key={index}
        className="emojiFlag"
        countryCode={country}
        style={{
          fontSize: '5em',
          lineHeight: '5em',
        }}
        svg
      />
  )
  );

  return (
    <Container>
      <Container2>
        {countryFlags}
      </Container2>
    
       <Container2>
        <p>from</p>
        <DropDown/>
         <Input type="text" style={{ padding: 0, margin:0 }} value={inputText} onChange={handleInputChange} placeholder="What do you want to translate?" />
       </Container2>
        
    
       
      
      
      <Button onClick={handleTranslateClick}>Translate</Button>
    </Container>
  );
}

export default TranslateInput;

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
const Container3 = styled.div`                   
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