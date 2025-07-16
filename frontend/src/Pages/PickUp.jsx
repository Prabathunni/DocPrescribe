import React from 'react'
import { Link } from 'react-router-dom'

function PickUp() {
  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className='bg-success text-center  text-white' style={{ width: '600px' }}>

        <h1 className='mb-5'>Welcome to <span style={{ fontFamily: '"Lavishly Yours", cursive',fontSize:'60px',color:'yellow' }}>DocPrescribe</span></h1>


        <div className='d-flex flex-column p-2'>

          <Link to={'/input'} className='btn btn-outline-light form-control mb-5 py-4'>Create a Prescription <i class="fa-solid fa-arrow-right fa-lg ms-2"></i></Link>
          <Link to={'/prescriptions'} className='btn btn-outline-light form-control mb-5 py-4'>Prescription History <i class="fa-solid fa-clock-rotate-left fa-lg ms-2"></i></Link>

        </div>



      </div>


    </div>
  )
}

export default PickUp