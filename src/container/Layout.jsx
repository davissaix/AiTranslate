import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryFlags from '../components/CountryFlags'
import TranslateInput from '../components/translateInput'
import { ViewPort } from './styles'
import { UserProvider } from '../components/UserProvider';

export const userContext = React.createContext({})


const Layout = () => {
 
  return (
    
     <BrowserRouter>
      < UserProvider >
        <ViewPort className= 'layout'> 
          <Routes>
          <Route path='/' element = {<CountryFlags/>} />
          <Route path='/translate' element = {<TranslateInput  />} />
          </Routes>
        </ViewPort>
      </ UserProvider>
      </BrowserRouter>  
    
  )
}

export default Layout