import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();

  const registered = (e) => {
    e.preventDefault()
    const registerInfo = {
      email,
      password,
      confirm
    }
    axios.post('http://localhost:8000/api/User/register', registerInfo, { withCredentials: true })
      .then( res => {
        if ( res.data.errors ) {
          console.log('Response for register.jsx post method', res)
          setFormErrors( res.data.errors )
        } else {
          history.push('/login')
        }
      })
      .catch( err => {
        console.error( err )
      })
  }



  return(
    <>
      <h1>Registration</h1>
      <form onSubmit={ registered }>
        <label htmlFor="email">Email: </label>
        <input 
          type="text" name="email" className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-danger">{ formErrors.email?.message }</p>
        <label htmlFor="password">Password: </label>
        <input 
          type="password" name="password" className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-danger">{ formErrors.password?.message }</p>
        <label htmlFor="confirm">Confirm Password: </label>
        <input 
          type="password" name="confirm" className="form-control"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <p className="text-danger">{ formErrors.confirm?.message }</p>
        <input type="submit" value="Register" className="btn btn-primary mt-3"/>
      </form>
    </>
  )
}

export default Register;