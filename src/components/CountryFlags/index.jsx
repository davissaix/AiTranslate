import React from 'react'
import styled from 'styled-components'
import ReactCountryFlag from "react-country-flag"
import {List, Container, Flag} from './styles'
import { Link } from "react-router-dom";
import { UserContext } from '../UserProvider'





function CountryFlags({ sendChildToParent }) {
    const {Ingles} = React.useContext(UserContext);
    const {english} = React.useContext(UserContext);
    const {english1} = React.useContext(UserContext);
    
    const {Aleman} = React.useContext(UserContext);
    const {germany} = React.useContext(UserContext);
    const {germany1} = React.useContext(UserContext);

    const {Frances} = React.useContext(UserContext);
    const {france} = React.useContext(UserContext);
    const {france1} = React.useContext(UserContext);

    const {Brasil} = React.useContext(UserContext);
    const {brazil} = React.useContext(UserContext);
    const {brazil1} = React.useContext(UserContext);

    const {Rusia} = React.useContext(UserContext);
    const {russian} = React.useContext(UserContext);
    const {russian1} = React.useContext(UserContext);

    const {Italia} = React.useContext(UserContext);
    const {italian} = React.useContext(UserContext);
    const {italian1} = React.useContext(UserContext);

    const {Espana} = React.useContext(UserContext);
    const {spanish} = React.useContext(UserContext);
    const {spanish1} = React.useContext(UserContext);
    
    const {Turquia} = React.useContext(UserContext);
    const {turkish} = React.useContext(UserContext);
    const {turkish1} = React.useContext(UserContext);

    const {China} = React.useContext(UserContext);
    const {chinese} = React.useContext(UserContext);
    const {chinese1} = React.useContext(UserContext);

    const {Japon} = React.useContext(UserContext);
    const {japanese} = React.useContext(UserContext);
    const {japanese1} = React.useContext(UserContext);
  
    //---------------------------------------------------
    const {GoButton} = React.useContext(UserContext);
   
    return (
        <Container className='container-list'>
            <p>Select your Languages</p>

            <List className='country-flag'>
                <Flag opacity={english} transform={english1} onClick ={()=> {Ingles()}}
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

                <Flag transform={germany1} opacity={germany} onClick ={()=> {Aleman()}} > 
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
                <Flag transform={france1} opacity ={france} onClick ={()=> {Frances()}}>
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
                <Flag transform={brazil1} opacity ={brazil} onClick ={()=> {Brasil()}}>
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
                <Flag transform={russian1} opacity ={russian} onClick ={()=> {Rusia()}}> 
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
                <Flag transform={italian1} opacity ={italian} onClick ={()=> {Italia()}}>
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
                <Flag transform={spanish1} opacity ={spanish} onClick ={()=> {Espana()}}>
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
                <Flag transform={turkish1} opacity ={turkish} onClick ={()=> {Turquia()}}> 
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
                <Flag transform={chinese1} opacity ={chinese} onClick ={()=> {China()}}>
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
                <Flag transform={japanese1} opacity ={japanese} onClick ={()=> {Japon()}}>
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
                <Link to="/translate">
                <Button onClick={GoButton}>Go</Button>
                </Link>
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
