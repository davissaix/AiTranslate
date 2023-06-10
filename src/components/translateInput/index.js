import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactCountryFlag from "react-country-flag";
import { UserContext } from '../UserProvider';
// import LanguageFlags from '../LanguageFlags';
import DropDown from '../DropDown';

function TranslateInput() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { LangSelected, selectedOption, mappedArray } = useContext(UserContext);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslateClick = async () => {
    console.log("Translate button clicked");
    console.log('Selected option input:', selectedOption);
    if (mappedArray) {
      await translateText(inputText, selectedOption, mappedArray);
    } else {
      console.log('mappedArray is not defined yet');
    }
  };

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
  ));

  async function translateText(text, selectedOption, mappedArray) {
    try {
      console.log("translateText function invoked");
      console.log("mappedArray:", mappedArray);
      // For each language in mappedArray, perform a translation request
      const responses = await Promise.all(mappedArray.map(async (lang) => {
        const options = {
          method: 'GET',
          url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
          params: {
            langpair: `${selectedOption}|${lang}`,
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

        const response = await axios.request(options);
        console.log(`Translation Response for ${lang}:`, response.data); // log the full response data for each language
        const matches = response.data.matches;
        const translations = matches.map(match => match.translation.toLowerCase());
        const uniqueTranslations = new Set(translations);
        const finalTranslation = Array.from(uniqueTranslations).join(" / ");

        return finalTranslation;
        
      }));

      // Set the responses array as the response state
      setResponse(responses);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  }
  const languageToCountryCode = {
    'en': 'GB',
    'de': 'DE',
    'fr': 'FR',
    'pt': 'BR',
    'ru': 'RU',
    'it': 'IT',
    'es': 'ES',
    'tr': 'TR',
    'zh': 'CN',
    'ja': 'JP',
    // add more language to country code mappings if needed
  }
  function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
      return null;
    }

    return (
      <div>
        <div>
          {children}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <Container>
      <Container2>
        {countryFlags}
      </Container2>

      <Container2>
        <p>from</p>
        <DropDown />
        <Input type="text" style={{ padding: 0, margin: 0 }} value={inputText} onChange={handleInputChange} placeholder="What do you want to translate?" />
      </Container2>

      <Button onClick={handleTranslateClick}>Translate</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Only map over the response array if response is not null */}
        {response !== null ? (
          response.map((translatedText, index) => (
            <div key={index}>{translatedText}</div>
          ))
        ) : (
          <div>No translations available.</div>
        )}
      </Modal>
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