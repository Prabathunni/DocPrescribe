import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PatientDetailsForm from '../Components/PatientDetailsForm';
import MedicineForm from '../Components/MedicineForm';
import ReviewForm from '../Components/ReviewForm';

function InputAquire() {


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
    medicines: [{ name: "", dosage: "", frequency: "", route: "" }]
  })


  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)


  const createPrescription = (e) => {
    e.preventDefault();
    console.log("button Clicked");

  }



  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className='bg-success border border-warning border-2 shadow-sm text-center  text-white' style={{ width: '600px' }}>

        <h1 className='mt-4 mb-5' style={{ fontFamily: '"Lavishly Yours", cursive' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />



        <form onSubmit={createPrescription} className='login-form'>

          {step === 1 && (<PatientDetailsForm formData={formData} setFormData={setFormData} />)}
          {step === 2 && (<MedicineForm formData={formData} setFormData={setFormData} />)}
          {step === 3 && (<ReviewForm formData={formData} />)}


          <div className='d-flex flex-column'>

            {step > 1 && <button onClick={prevStep} className='btn btn-outline-light py-3 mt-5'>Back</button>}

            {step < 3 ?
              (<button onClick={nextStep} className='btn btn-light py-3 mt-3 mb-3 form-control'>Next</button>)
              :
              (<button type='submit' className='btn btn-primary mt-3 py-3'>Create Prescription</button>)

            }
            {step===1 && ( <span><Link to={'/pickup'} className='text-white'>Go Back</Link></span> )}
          </div>



        </form>







      </div>


    </div>
  )
}

export default InputAquire