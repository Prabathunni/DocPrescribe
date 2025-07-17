import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Prescriptions() {

  const Data = [
    { name: "sethu", diagnosis: "headache", date: "10-10-2025" },
    { name: "fil", diagnosis: "headache", date: "10-10-2025" },
    { name: "arun", diagnosis: "headache", date: "10-10-2025" },
    { name: "john", diagnosis: "headache", date: "10-10-2025" },
    { name: "john", diagnosis: "headache", date: "10-10-2025" },
    { name: "john", diagnosis: "headache", date: "10-10-2025" },
  ]

  return (
    <div className='bg-success d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>

      <div className='secondaryDIV' style={{ width: '700px', minHeight: '500px' }}>

        <div className='d-inline d-md-flex align-items-center justify-content-between'>
        <h1 className='text-light'>Prescriptions History </h1>
        <Link to={'/pickup'} className='text-decoration-none text-white'><i class="fa-solid fa-arrow-right fa-flip-horizontal me-2"></i>Go Back</Link>
        </div>
        <hr />

        {Data?.length > 0 ?
          (
            Data.map((item, i) => (
              <div className='d-flex justify-content-center'>
              <Card key={i} className='mb-2' border="primary" style={{ width: '18rem' }}>
                <Card.Header>{item?.date}</Card.Header>
                <Card.Body>
                  <Card.Title>Patient Name: {item?.name}</Card.Title>
                  <Card.Text>
                    Diagnosis: {item?.diagnosis}
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            ))
          )
          :
          "No Prescription Record exists."

        }




      </div>

    </div>
  )
}

export default Prescriptions