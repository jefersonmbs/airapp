import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt=""/>

      <div className="content">
        <p>Ofereça <strong>Spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa</p>
      </div>
    </div>
    );
}

export default App;
