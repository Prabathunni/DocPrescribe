import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className='bg-success border border-light border-1 shadow-sm text-center  text-white' style={{ width: '600px' }}>

        <h1 className='mt-4 mb-5 text-warning' style={{ fontFamily: '"Lavishly Yours", cursive' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />

        <h1 className='mt-3'>Register</h1>


        <Form className='login-form'>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Doctor name"
            />
            <label htmlFor="floatingInputCustom">Doctor Name</label>
          </Form.Floating>

          <Form.Select aria-label="Select Doctor Qualification" className='mb-2'>
            <option >Select Qualification Stream</option>
            <option value="MBBS">MBBS</option>
            <option value="BDS">BDS</option>
            <option value="BHMS">BHMS</option>
            <option value="BAMS">BAMS</option>
            <option value="BUMS">BUMS</option>
            <option value="MD">MD</option>
            <option value="MS">MS</option>
            <option value="DNB">DNB</option>
            <option value="MDS">MDS</option>
          </Form.Select>


          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Clinic name"
            />
            <label htmlFor="floatingInputCustom">Clinic Name</label>
          </Form.Floating>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="number"
              placeholder="Contact Number"
            />
            <label htmlFor="floatingInputCustom">Contact Number</label>
          </Form.Floating>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="email@gmail.com"
            />
            <label htmlFor="floatingInputCustom">Email Address</label>
          </Form.Floating>

          <Form.Floating className='mb-2'>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>

          <button type='submit' className='btn btn-outline-warning form-control py-3'>Register</button>

        </Form>

        <p>Already Have an account?<Link to={'/'} className='text-light'> click here</Link> to Login</p>

      </div>


    </div>
  )
}

export default Register