import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const RegisterModal = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return(
    <>
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
    </>
  )
}

export default RegisterModal;

