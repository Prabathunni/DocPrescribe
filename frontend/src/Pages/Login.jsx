import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap';

function Login() {



  const loginUser = async (e) => {
    e.preventDefault()
    console.log("button clicked");
    
  }

  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className='bg-success border border-light border-1 shadow-sm text-center  text-white' style={{ width: '600px' }}>

        <h1 className='mt-4 mb-5 text-warning' style={{ fontFamily: '"Lavishly Yours", cursive',fontSize:'40px' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />

        <h1 className='mt-3'>Login</h1>


        <Form className='login-form' onSubmit={loginUser}>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="you email"
            />
            <label htmlFor="floatingInputCustom">Email</label>
          </Form.Floating>

          <Form.Floating className='mb-3'>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>

          <button type='submit' className='btn btn-outline-warning form-control py-3'>Login</button>

        </Form>

        <p>Don't Have an account?<Link to={'/register'} className='text-light'> click here</Link> to Register</p>

      </div>


    </div>
  )
}

export default Login