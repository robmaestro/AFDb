import './css/App.css';
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
      <Body /> 
      <Footer />
    </>
  );
}

export default App;
