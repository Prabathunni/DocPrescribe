import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllPrescriptionsAPI } from '../services/apiServices'

function Prescriptions() {

  const [data,setData] =useState([])

  
  useEffect(()=>{
    const getAllPrescription = async () => {
      try {
        const result = await getAllPrescriptionsAPI();
        setData(result?.data)
        
      } catch (error) {
        // console.log(error);
        return setData([])
      }
    }
    getAllPrescription()
  },[])


  return (
    <div className='bg-success d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>

      <div className='secondaryDIV' style={{ width: '700px', minHeight: '500px' }}>

        <div className='d-inline d-md-flex align-items-center justify-content-between'>
        <h1 className='text-light'>Prescriptions History </h1>
        <Link to={'/pickup'} className='text-decoration-none text-white'><i class="fa-solid fa-arrow-right fa-flip-horizontal me-2"></i>Go Back</Link>
        </div>
        <hr />

      <div className='scrollable-DIV p-2' style={{height:'500px', overflowY:'auto'}}>
        {data?.length > 0 ?
          (
            data?.map((item, i) => (
              <div className='d-flex justify-content-center'>
                <Card key={i} className='mb-2 history-CARD' border="primary" >
                  <Card.Header>{item?.createdAt}</Card.Header>
                    <Card.Body>
                      <Card.Title>Patient Name: <span className='bg-light px-3 ms-1 rounded text-danger'> {item?.name} </span> </Card.Title>
                       <Card.Text className='mt-4'>
                         Diagnosis: <span className='bg-warning px-1 rounded'> {item?.diagnosis} </span>
                       </Card.Text>
                    </Card.Body>
                </Card>
              </div>
            ))
          )
          :
           <h6 className='text-center mt-5'>No Prescription Record exists.</h6>

        }      
      
      </div>





      </div>

    </div>
  )
}

export default Prescriptions