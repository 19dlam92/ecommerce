import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();


  const loggedIn = (e) => {
    e.preventDefault()
    const loggedInUser = {
      email,
      password
    }
    axios.post('http://localhost:8000/api/User/login', loggedInUser, { withCredentials: true })
      .then( res => {
        console.log('Response for Logged in user', res)
        if ( res.data.errors ) {
          setFormErrors( res.data.errors )
        } else {
          history.push('/dashboard')
        }
      })
      .catch( err => {
        console.error( err )
      })
  }


  return(
    <>
      <h1>Login</h1>
      <form onSubmit={ loggedIn }>
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
        <input type="submit" value="Login" className="btn btn-primary mt-3"/>
      </form>
    </>
  )
}

export default Login;