import React, {useState} from 'react';
import md5 from 'md5';
import api from './services/api'
import './App.css';
import logo from './assets/logo.svg'

function App() {
  
  const [email , setEmail] = useState('');
  const [senha , setSenha] = useState('');
  
  async function handleSubmit(event){
 
  event.preventDefault();

  const response = await api.post('/sessions',{
    email,
    senha
    })
    console.log(response +' Resposta')
  }

 console.log(md5(senha));
  

  return (
    <div className="container">
      <img src={logo} alt=""/>

      <div className="content">
        <p>Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
      
        <form onSubmit= {handleSubmit}>
          <label htmlFor="email" >E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu E-mail" 
            value = {email}
            onChange = { event => setEmail(event.target.value)}
            
          />
          <label htmlFor="senha" >SENHA *</label>
          <input 
            type="password" 
            id="senha" 
            placeholder="Sua senha" 
            value = {senha}
            onChange = {event => setSenha(event.target.value)}
            
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
