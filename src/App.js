import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt=""/>

      <div className="content">
        <p>Ofereça <strong>Spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa</p>
      
        <form >
          <label htmlFor="email" >E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu E-mail" 
            required
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
       </div>
    </div>
    );
}

export default App;
