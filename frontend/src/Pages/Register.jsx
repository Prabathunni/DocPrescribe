import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserAPI } from '../services/apiServices'

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [qualification, setQualification] = useState("")
  const [phoneNumber, setPhonenumber] = useState("")
  const [clinicName, setClinicname] = useState("")

  const [isLoading, setIsloading] = useState(false)


  const registerUser = async (e) => {
    e.preventDefault();
    try {

      if (!name || !email || !password || !qualification || !phoneNumber || !clinicName) {
        return alert("Fill all Input Field")
      }

      const userData = {
        name,
        email,
        password,
        qualification,
        phoneNumber,
        clinicName
      }

      const result =  await registerUserAPI(userData, setIsloading);
      alert(result?.data)
      navigate('/')

    } catch (error) {
      console.log(error);
      setIsloading(false)
      alert("Register Failed")

    } finally {
      setIsloading(false)

    }
  }



  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className='bg-success text-center  text-white' style={{ width: '600px' }}>

        <h1 className='mt-4 mb-5 text-warning' style={{ fontFamily: '"Lavishly Yours", cursive' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />

        <h1 className='mt-3'>Register</h1>


        <Form className='login-form' onSubmit={registerUser}>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Doctor name"
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="floatingInputCustom">Doctor Name</label>
          </Form.Floating>

          <Form.Select aria-label="Select Doctor Qualification" onChange={e => setQualification(e.target.value)} className='mb-2' required>
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
              onChange={e => setClinicname(e.target.value)}
              required
            />
            <label htmlFor="floatingInputCustom">Clinic Name</label>
          </Form.Floating>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="number"
              placeholder="Contact Number"
              onChange={e => setPhonenumber(e.target.value)}
              required
            />
            <label htmlFor="floatingInputCustom">Contact Number</label>
          </Form.Floating>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="email@gmail.com"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInputCustom">Email Address</label>
          </Form.Floating>

          <Form.Floating className='mb-2'>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>

          {isLoading ?
            <button className='btn btn-outline-warning form-control py-3'>
              <Spinner animation="border" variant="light" />
            </button>
            :
            <button type='submit' className='btn btn-outline-warning form-control py-3'>
              Register
            </button>
          }



        </Form>

        <p>Already Have an account?<Link to={'/'} className='text-light'> click here</Link> to Login</p>

      </div>


    </div>
  )
}

export default Register