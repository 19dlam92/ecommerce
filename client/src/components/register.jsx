import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const registered = (e) => {
    e.preventDefault()
    const registerInfo = {
      email,
      password,
      confirm
    }
    axios.post('http://localhost:8000/api/User/register', registerInfo)
    .then( res => {
      console.log('Response for Registration', res)
    })
    .catch( err => {
      console.error( err )
    })
  }

  return(
    <>
      <h1>Registration</h1>
      <form autoComplete="off">
        <label htmlFor="email">Email: </label>
        <input 
          type="text" name="email" className="form-control" autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input 
          type="password" name="password" className="form-control" autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input 
          type="password" name="confirmPassword" className="form-control" autoComplete="new-password"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <input type="submit" value="Register" className="btn btn-primary mt-3"/>
      </form>
    </>
  )
}

export default Register;