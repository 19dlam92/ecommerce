import React from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import LoginModal from '../features/modal/login-modal'
import RegisterModal from '../features/modal/register-modal'


const Navbar = () => {

  const history = useHistory()

  const logoutUser = () => {
    axios.get('http://localhost:8000/api/User/logout', { withCredentials: true })
      .then( res => {
        console.log('You have successfully LOGGED OUT', res)
        history.push('/')
      })
      .catch( err => {
        console.error( err )
      })
  }

  return(
    <>
      <div className='nav-bar mt-3'>
        <h1>Ecom</h1>
        <div className='nav-search'>
          <div className='input-group'>
            <div className='input-group-btn search-panel'>
              <button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown'>
                <span id='search_concept'>All</span> <span className='caret'></span>
              </button>
                <ul className='dropdown-menu scrollable-dropdown' role='menu'>
                  <li><a href='#'>Dairy</a></li>
                  <li><a href='#'>Fruit</a></li>
                  <li><a href='#'>Protein</a></li>
                  <li><a href='#'>Vegetable</a></li>
                </ul>
            </div>
            <input type='hidden' name='search_param' value='all' id='search_param' />
            <input type='text' className='form-control' name='x' id='search' placeholder='Search' />
          </div>
        </div>
        <h1>Change Language?</h1>
        <div className='navbar-btn'>
          <LoginModal />
          <RegisterModal />
          {/* <Link to='/login' className='btn btn-primary'>Log In</Link> */}
          <button onClick={ logoutUser } className='btn btn-warning'>Log Out</button>
        </div>
      </div>
      <div className='dropdown'>
        <a href="/dashboard" className='active'>Home</a>
        <a href="/products">Products</a>
        <a href="/orders">Make an Order</a>
        <a href="/lists">List a Product</a>
        <a href="/contacts">Contact</a>
      </div>
    </>
  )
}

export default Navbar;