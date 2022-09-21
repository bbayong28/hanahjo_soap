import React from 'react'
import './css/reset.css'
import './css/common.scss'
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  )
}

export default App;
