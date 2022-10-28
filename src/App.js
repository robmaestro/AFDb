import './css/App.css';
import Body from './components/Body'
import Footer from './components/Footer'
import { useState } from 'react';
import CreateAccountModal from './components/CreateAccountModal';
import SignInModal from './components/SignInModal';
import Films from './components/Films';


function App() {

  
  return (
    <>
      <SignInModal />
      <CreateAccountModal />
      <Films /> 
      <Footer />
    </>
  );
}

export default App;
