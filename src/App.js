import React, {useState} from 'react';
import api from './services/api'
import './App.css';
import logo from './assets/logo.svg'

function App() {
  const [email , setEmail] = useState('');

  function handleSubmit(event){
  event.preventDefault();  


    console.debug( email)
  }

  return (
    <div className="container">
      <img src={logo} alt=""/>

      <div className="content">
        <p>Ofereça <strong>Spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa</p>
      
        <form onSubmit= {handleSubmit}>
          <label htmlFor="email" >E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu E-mail" 
            value = {email}
            onChange = { event => setEmail(event.target.value)}
            
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
