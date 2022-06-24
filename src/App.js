import React from 'react';
import Header from './page/Header';
import Hi from './page/Hi';
import Footer from './page/Footer';
import Logo from './img/logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* header */}
      <header>
        <img src={Logo} className='App-logo' alt='logo'/>
        <Header ver='18.0.0'/>
        {/* <Hi country = '대한민국' addr = '서울' count = {2} />
        <Hi country = '대한민국' count = {2} />
        <Hi country = '일본' addr = '도쿄' /> */}
        <Hi country = '일본' />
        <Hi country = '일본' sex = '남자'/>
        <Hi country = '일본' male/>
      </header>
      {/* footer */}
      <Footer />
    </ >
  );
}

export default App;