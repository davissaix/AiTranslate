import React from 'react';
import { useEffect } from 'react';
import Header from '../header/Header';
import { ViewPort, MainContent, GlobalStyle } from './styles';
import Layout from '../../container/Layout';



function App() {
  // useEffect(() => {
  //   const setVh = () => {
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   };

  //   window.addEventListener('resize', setVh);
  //   setVh();

  //   return () => {
  //     window.removeEventListener('resize', setVh);
  //   };
  // }, []);
  return (
    
    <ViewPort className="App">
      <GlobalStyle/>
      <Header/>
      <MainContent>
         <Layout /> 
      </MainContent>
      
    </ViewPort>
  );
}

export default App;
