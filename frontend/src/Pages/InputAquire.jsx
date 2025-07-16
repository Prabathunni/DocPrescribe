import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PatientDetailsForm from '../Components/PatientDetailsForm';
import MedicineForm from '../Components/MedicineForm';
import ReviewPrescription from '../Components/ReviewPrescription';
import html2pdf from 'html2pdf.js';

function InputAquire() {


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
    medicines: [{ name: "", dosage: "", frequency: "", route: "" }]
  })

  const printRef = useRef();

  const handlePrint = () => {
    window.print()
  }

  const downloadPDF = () => {
    const element = printRef.current;

    const opt = {
      margin: 0.5,
      filename: 'prescription.pdf',
      image: { type: 'jpeg', quality: 0.99 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)


  const createPrescription = (e) => {
    e.preventDefault();
    console.log("button Clicked");

  }



  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className={step == 3 ? `primaryDIV bg-success text-center text-white` : `primaryDIV bg-success border border-warning border-2 shadow-sm text-center text-white`}>

        <h1 className='mt-4 mb-5 d-print-none' style={{ fontFamily: '"Lavishly Yours", cursive' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />



        <div className='login-form'>

          {step === 1 && (<PatientDetailsForm formData={formData} setFormData={setFormData} />)}
          {step === 2 && (<MedicineForm formData={formData} setFormData={setFormData} />)}
          {step === 3 && (
            <>

              <div className='d-print-none'>
                <h4 className="mb-3">Review Information</h4>

                <div className='d-flex justify-content-end gap-2 mb-3'>
                  <button onClick={handlePrint} className='btn btn-outline-warning btn-sm'>Print<i class="fa-solid fa-print ms-2"></i></button>
                  <button onClick={downloadPDF} className='btn btn-danger btn-sm'>Download Pdf<i class="fa-solid fa-file-pdf ms-2"></i></button>
                </div>

              </div>

              <div ref={printRef} className='prescription-wrapper'>

                <ReviewPrescription formData={formData} />

              </div>

            </>
          )}


          <div className='d-flex flex-column d-print-none'>

            {step > 1 && <button onClick={prevStep} className='btn btn-outline-light py-3 mt-5'><i class="fa-solid fa-arrow-right fa-flip-horizontal fa-lg me-2"></i> Back</button>}

            {step < 3 ?
              (<button onClick={nextStep} className='btn btn-outline-light py-3 mt-3 mb-3 form-control'>Next <i class="fa-solid fa-arrow-right fa-lg ms-2"></i></button>)
              :
              (<button onClick={createPrescription} className='btn btn-primary mt-3 py-3'>Save Prescription</button>)

            }
            {step === 1 && (<span><Link to={'/pickup'} className='text-white'>Go Back</Link></span>)}
          </div>



        </div>





      </div>


    </div>
  )
}

export default InputAquire