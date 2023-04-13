import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const RegisterModal = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
    <form onSubmit={ registered }>
        <Button variant="primary" onClick={ handleOpen }>
          Register
        </Button>
        <Modal show={ open } onHide={ handleClose }>
          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="registerForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*************"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerForm.ControlInput1">
                <Form.Label> Confirm Password</Form.Label>
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
              Register
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

export default RegisterModal;

