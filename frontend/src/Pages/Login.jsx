import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Spinner } from 'react-bootstrap';
import { loginUserAPI } from '../services/apiServices';
import { toast } from 'react-toastify';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isLoading, setIsloading] = useState(false)


  const loginUser = async (e) => {
    e.preventDefault();
    try {

      if (!email || !password) {
        return toast.info("Fill all Input Field")
      }

      const userData = {
        email,
        password,
      }

      const result = await loginUserAPI(userData, setIsloading);

      toast.success(result?.data?.message);
      const user = result?.data.user;
      sessionStorage.setItem('user', JSON.stringify(user))


      navigate('/pickup')

    } catch (error) {
      console.log(error);
      setIsloading(false)
      toast.error(error.response.data)

    } finally {
      setIsloading(false)

    }
  }

  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className='bg-success  text-center  text-white' style={{ width: '600px' }}>

        <h1 className='mt-4 mb-5 text-warning' style={{ fontFamily: '"Lavishly Yours", cursive', fontSize: '40px' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />

        <h1 className='mt-3'>Login</h1>


        <Form className='secondaryDIV' onSubmit={loginUser}>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="you email"
              onChange={e => setEmail(e.target.value)}
              required

            />
            <label htmlFor="floatingInputCustom">Email</label>
          </Form.Floating>

          <Form.Floating className='mb-3'>
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
              Login
            </button>
          }

        </Form>

        <p>Don't Have an account?<Link to={'/register'} className='text-light'> click here</Link> to Register</p>

      </div>


    </div>
  )
}

export default Login