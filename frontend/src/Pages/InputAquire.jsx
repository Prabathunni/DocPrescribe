import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PatientDetailsForm from '../Components/PatientDetailsForm';
import MedicineForm from '../Components/MedicineForm';
import ReviewPrescription from '../Components/ReviewPrescription';
import html2pdf from 'html2pdf.js';
import { addPrescriptionAPI } from '../services/apiServices';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

function InputAquire() {

  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false)
  const printRef = useRef();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
    medicines: []
  })



  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)


  const addPrescription = async (e) => {
    e.preventDefault();
    try {
      const result = await addPrescriptionAPI(formData, setIsloading)
      toast.success(result?.data);
      navigate('/pickup')

    } catch (error) {
      toast.warning("Prescription Not Saved!")
      setIsloading(false)

    } finally {
      setIsloading(false)
    }

  }


  // PRINT
  const handlePrint = () => {
    window.print()
  }

  // PDF DOWNLOAD
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


  return (
    <div className='bg-success d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

      <div className={step == 3 ? `primaryDIV bg-success text-center text-white` : `primaryDIV bg-success border border-warning border-2 shadow-sm text-center text-white`}>

        <h1 className='mt-4 mb-5 d-print-none' style={{ fontFamily: '"Lavishly Yours", cursive' }}>DocPrescribe</h1>

        <hr style={{ width: '80%', margin: '0 auto' }} />


        <div className='secondaryDIV'>
          {isLoading ?
            <Spinner animation="border" variant="light" />
            :
            <>
              {step === 1 && (<PatientDetailsForm formData={formData} setFormData={setFormData} />)}
              {step === 2 && (<MedicineForm formData={formData} setFormData={setFormData} />)}
              {step === 3 &&
                (<div ref={printRef} className='priscription-for-print'>
                  <ReviewPrescription formData={formData} printEvent={handlePrint} pdfDownload={downloadPDF} />
                </div>)
              }
            </>
          }


          {/* ------BUTTONS ( NEXT, BACK, SAVE PRESCRIPTION )  ------ */}

          <div className='d-flex flex-column justify-content-end d-print-none' style={{ height: '265px' }}>

            {step > 1 && <button onClick={prevStep} className='btn btn-outline-light py-3 '><i class="fa-solid fa-arrow-right fa-flip-horizontal fa-lg me-2"></i> Back</button>}
            {
              step < 2 ?

                formData.name && (<button onClick={nextStep} className='btn btn-outline-light py-3 mt-3 mb-3'> Next <i class="fa-solid fa-arrow-right fa-lg ms-2 "></i></button>)
                :
                formData.medicines.length > 0 && step < 3 ?
                  (<button onClick={nextStep} className='btn btn-outline-light py-3 mt-3 mb-3'> Next <i class="fa-solid fa-arrow-right fa-lg ms-2 "></i></button>)
                  :
                  formData.medicines.length > 0 && (<button onClick={addPrescription} className='btn btn-primary py-3 mt-3'>Save Prescription</button>)

            }

            {step === 1 && (<span><Link to={'/pickup'} className='text-white'>Go Back</Link></span>)}
          </div>



        </div>

      </div>


    </div>
  )
}

export default InputAquire