import './css/App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { useState } from 'react';
import CreateAccountModal from './components/CreateAccountModal';
import SignInModal from './components/SignInModal';


function App() {

  
  return (
    <>
      <SignInModal />
      <CreateAccountModal />
      <Header/>
      <Body /> 
      <Footer />
    </>
  );
}

export default App;
