import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const LoginModal = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  const loggedIn = (e) => {
    e.preventDefault()
    const loggedInUser = {
      email,
      password
    }
    axios.post('http://localhost:8000/api/User/login', loggedInUser, { withCredentials: true })
      .then( res => {
        console.log('Response for login.jsx post method', res)
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
      <form onSubmit={ loggedIn }>
        <Button variant="primary" onClick={ handleOpen }>
          Log In
        </Button>
        <Modal show={ open } onHide={ handleClose }>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*************"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={ handleClose }>
              Login
            </Button>
            <Button variant="secondary" onClick={ handleClose }>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  )
}

export default LoginModal;

