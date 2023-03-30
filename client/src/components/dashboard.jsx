import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom';


const Dashboard = () => {

  const [loggedIn, setLoggedIn] = useState({})
  const history = useHistory()

  // { withCredentials: true }
  // refers to the cookie

  useEffect(() => {
    axios.get('http://localhost:8000/api/User/jwt', { withCredentials: true })
      .then( res => {
        console.log('The user has LOGGED IN', res)
        if ( res.data.results ) {
          setLoggedIn( res.data.results )
        }
      })
      .catch( err => {
        console.error( err )
        history.push('/')
      })
  }, [])



  return(
    <>
      <div>
        <h2>You have successfully created an account with { loggedIn.email }!</h2>
      </div>
    </>
  )
}

export default Dashboard;