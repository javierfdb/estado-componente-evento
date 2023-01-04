import { useState } from 'react'
import Form from './components/Input'
import Boton from './components/Boton'

const userCredenciales = {
  email: "desafio@server.com",
  pass: "252525"
}

const App = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !pass.trim() ) {
     return setError('Por favor llena todos los campos');
    }

    if (userCredenciales.email === email && userCredenciales.pass === pass) {
      window.location.href = 'https://empieza.desafiolatam.com/cohorts';
    } else {
      setError("Los datos no son correctos")
    }
  }

  return (
    <div className="row justify-content-center">
     <div className="col-lg-6">

       <form onSubmit={handleSubmit}>
          <h2 className='text-center'>Login</h2>
          <Form
            pass={pass}
            setPass={setPass}
            email={email}
            setEmail={setEmail}>
          </Form>

          {
            pass === "252525" && <Boton texto="Acceder"/>
          }
          {
            error && <p className='error'>{error}</p>
          }
          
       </form>
      
      
     </div>
    </div>
  )
}

export default App
