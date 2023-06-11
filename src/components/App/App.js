import React from 'react';
import Header from '../header/Header';
import { ViewPort, MainContent } from './styles';
import Footer from '../footer/Footer';
import Layout from '../../container/Layout';


function App() {
  return (
    <ViewPort className="App">
      <Header/>
      <MainContent>
         <Layout />
      </MainContent>
      <Footer/>
    </ViewPort>
  );
}

export default App;
