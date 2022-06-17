import React, {useState} from 'react'
import styled from 'styled-components'
import ReactCountryFlag from "react-country-flag"
import {List, Container, Flag} from './styles'
// import {goClicke} from './functions/goClick'




function CountryFlags() {
    const [english, setEnglish] = useState(1)
    const [germany, setGermany] = useState(1)
    const [france, setFrance] = useState(1)
   
    const [brazil, setBrazil] = useState(1)
    const [russian, setRussian] = useState(1)
    const [italian, setItalian] = useState(1)
    const [spanish, setSpanish] = useState(1)
    const [turkish, setTurkish] = useState(1)
    const [chinese, setChinese] = useState(1)
    const [japanese, setJapanese] = useState(1)
    // translate state
    const [english1, setEnglish1] = useState('translateY(0px)')
    const [germany1, setGermany1] = useState('translateY(0px)')
    const [france1, setFrance1] = useState('translateY(0px)')
    
    const [brazil1, setBrazil1] = useState('translateY(0px)')
    const [russian1, setRussian1] = useState('translateY(0px)')
    const [italian1, setItalian1] = useState('translateY(0px)')
    const [spanish1, setSpanish1] = useState('translateY(0px)')
    const [turkish1, setTurkish1] = useState('translateY(0px)')
    const [chinese1, setChinese1] = useState('translateY(0px)')
    const [japanese1, setJapanese1] = useState('translateY(0px)')

    const isSelected = []
    const languages = [english, germany, france, brazil, russian, italian, spanish, turkish, chinese, japanese]
    
    function goButton (){
        console.log(languages)
        const selection = []
        const language = ['EN', 'DE', 'FR', 'BR', 'RU', 'IT', 'ES', 'TR', 'ZH', 'JA']
        const langSelected = []
        const a = languages.map (( lang, index) => { 
            if (lang === 0.5){
                selection.push(index) 
            }})
        language.map((lengua, indice) => {
            var iterator = selection.values();
            for (const elements of iterator){
            if (indice === (elements)){
                langSelected.push(lengua)
            }}})      
        console.log(selection)
        console.log(langSelected)
    }

    // function goClick() {
    //     if (english === 0.5) {
    //         isSelected.push('GB');
    //         console.log(isSelected)
    //     }
    //     // console.log(isSelected)

    // }
// function array (country){
//     const recorreArray = languages => languages.forEach(item => {
//         console.log(languages)
//             if (country === 0.5) {
//             isSelected.push(country);
//             console.log(isSelected)
//         }})
//     console.log(languages)
// }
    

    //  const pushIsSelected = (code) => {
        
    //         isSelected.push(code)
    //         console.log(isSelected)
          
    // }
    
    return (
        <Container className='container-list'>
            <p>Select your Languages</p>

            <List className='country-flag'>
                <Flag opacity={english} transform={english1} onClick ={()=> {
                if (english===1 && english1==='translateY(0px)' ) {
                    setEnglish(0.5);
                    setEnglish1('translateY(-7px)');
                   
                   
                } else {
                    setEnglish(1);
                    setEnglish1('translateY(0px)')
                // for( var i = 0; i < isSelected.length; i++){ 
    
                //     if ( isSelected[i] === 'GB'){ 
                
                //         isSelected.splice(i, 1); 
                //     }
                
                // }
                }
                
            }
            }
             > 
                <ReactCountryFlag
                className="emojiFlag"
                countryCode='GB'
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="English"
                svg/>
            </Flag>   

            <Flag transform={germany1} opacity={germany} onClick ={()=> {
                if (germany===1 && germany1==='translateY(0px)' ) {
                    setGermany(0.5)
                    setGermany1('translateY(-7px)')  
                    
                } else {
                    setGermany(1)
                setGermany1('translateY(0px)')
                //   for( var i = 0; i < isSelected.length; i++){ 
    
                // if ( isSelected[i] === 'DE'){ 
                
                //          isSelected.splice(i, 1); 
                //      }
                
                //  }
                 console.log(isSelected)
                }    
            }
            } > 
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="DE"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="German"
                svg/>
            </Flag>   
            <Flag transform={france1} opacity ={france} onClick ={()=> {
                if (france===1 && france1==='translateY(0px)' ) {
                setFrance(0.5)
                setFrance1('translateY(-7px)')    
                } else {
                setFrance(1)
                setFrance1('translateY(0px)')
            }}}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="FR"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="French"
                svg/>
            </Flag>   
            <Flag transform={brazil1} opacity ={brazil} onClick ={()=> {
                if (brazil===1 && brazil1==='translateY(0px)' ) {
                    setBrazil(0.5)
                    setBrazil1('translateY(-7px)')    
                    } else {
                    setBrazil(1)
                    setBrazil1('translateY(0px)')
                }}}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="BR"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Portuguese"
                svg/>
            </Flag>   
            <Flag transform={russian1} opacity ={russian} onClick ={()=> {
                if (russian===1 && russian1==='translateY(0px)' ) {
                    setRussian(0.5)
                    setRussian1('translateY(-7px)')    
                    } else {
                    setRussian(1)
                    setRussian1('translateY(0px)')
                }}}> 
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="RU"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Russian"
                svg/>
            </Flag>   
            <Flag transform={italian1} opacity ={italian} onClick ={()=> {
                if (italian===1 && italian1==='translateY(0px)' ) {
                    setItalian(0.5)
                    setItalian1('translateY(-7px)')    
                    } else {
                    setItalian(1)
                    setItalian1('translateY(0px)')
                }}}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="IT"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Italian"
                svg/>
            </Flag>   
            <Flag transform={spanish1} opacity ={spanish} onClick ={()=> {
                if (spanish===1 && spanish1==='translateY(0px)' ) {
                    setSpanish(0.5)
                    setSpanish1('translateY(-7px)')    
                    } else {
                    setSpanish(1)
                    setSpanish1('translateY(0px)')
                }}}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="ES"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Spanish"
                svg/>
            </Flag>   
            <Flag transform={turkish1} opacity ={turkish} onClick ={()=> {
                if (turkish===1 && turkish1==='translateY(0px)' ) {
                    setTurkish(0.5)
                    setTurkish1('translateY(-7px)')    
                    } else {
                    setTurkish(1)
                    setTurkish1('translateY(0px)')
                }}}> 
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="TR"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Turkish"
                svg/>
            </Flag>   
            <Flag transform={chinese1} opacity ={chinese} onClick ={()=> {
                if (chinese===1 && chinese1==='translateY(0px)' ) {
                    setChinese(0.5)
                    setChinese1('translateY(-7px)')    
                    } else {
                    setChinese(1)
                    setChinese1('translateY(0px)')
                }}}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="CN"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Chinese"
                svg/>
            </Flag>   
            <Flag transform={japanese1} opacity ={japanese} onClick ={()=> {
                if (japanese===1 && japanese1==='translateY(0px)' ) {
                    setJapanese(0.5)
                    setJapanese1('translateY(-7px)')   
                    console.log(japanese+'selected') 
                    } else {
                    setJapanese(1)
                    setJapanese1('translateY(0px)')
                    console.log(japanese+'noselected')
                }}}>
                <ReactCountryFlag
                className="emojiFlag"
                countryCode="JP"
                style={{
                    fontSize: '5em',
                    lineHeight: '5em',
                   
                }}
                aria-label="Japanese"
                svg/>
            </Flag>   
            </List>
            <div>
                <Button onClick={goButton} >Go</Button>
            </div>
        </Container>
    )
}

export default CountryFlags


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
