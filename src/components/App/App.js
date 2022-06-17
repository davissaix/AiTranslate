import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Layout from '../../container/Layout';

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Layout />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
