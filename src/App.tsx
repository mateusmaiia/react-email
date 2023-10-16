import { FormEvent, useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(event:FormEvent){
    event.preventDefault()

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");

      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_iwv20oc", "template_9e55tsh", templateParams, "jC_iAK5wdMrBaG9o3")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)

      setEmail('')
      setMessage('')
      setName("")
    }, (error ) =>{
      console.log("error:", error)
    })

    
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;