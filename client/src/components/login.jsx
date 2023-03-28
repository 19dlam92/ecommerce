import React from 'react'
import axios from 'axios'

const Login = () => {





  return(
    <>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="email">Email: </label>
        <input 
          type="text" name="email" className="form-control"
        />
        <label htmlFor="password">Password: </label>
        <input 
          type="password" name="password" className="form-control"
        />
        <input type="submit" value="Login" className="btn btn-primary mt-3"/>
      </form>
    </>
  )
}

export default Login;