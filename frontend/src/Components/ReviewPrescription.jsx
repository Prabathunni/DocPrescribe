import React from 'react'

function ReviewPrescription({ formData, printEvent, pdfDownload }) {

  const doctorData = JSON.parse(sessionStorage.getItem('user'))
  console.log(doctorData);
  


  return (
    <>
    
      <div className='d-print-none'>

        <h4 className="mb-3">Review Information</h4>
        <div className='d-flex justify-content-end gap-2 mb-3'>
          <button onClick={printEvent} className='btn btn-outline-warning btn-sm'>Print<i class="fa-solid fa-print ms-2"></i></button>
          <button onClick={pdfDownload}  className='btn btn-danger btn-sm'>Download Pdf<i class="fa-solid fa-file-pdf ms-2"></i></button>
        </div>

      </div>


      <div className="p-4 text-dark text-start"
        style={{ maxWidth: '800px', margin: 'auto', background: '#fff', fontFamily: 'serif' }}>

        <div className="text-center mb-4">
          <h2>{doctorData?.clinicName} </h2>
          <p><strong>Dr. {doctorData?.name}, {doctorData?.qualification}</strong></p>
          <p>+91 {doctorData?.phoneNumber} | Date: {new Date().toLocaleDateString()}</p>
        </div>

        <hr />

        <div className="mb-3">
          <h5 style={{textDecoration:'underline'}}>Patient Details</h5>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age} | <strong>Gender:</strong> {formData.gender}</p>
        </div>

        <div className="mb-3">
          <h5 style={{textDecoration:'underline'}}>Diagnosis / Notes</h5>
          <p>{formData.diagnosis}</p>
        </div>

        <div className="mb-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Medicine</th>
                <th>Dosage</th>
                <th>Route</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {formData.medicines.map((med, index) => (
                <tr key={index}>
                  <td>{med.name}</td>
                  <td>{med.dosage}</td>
                  <td>{med.route}</td>
                  <td>{med.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id='prescriptionFooter' className="text-end mt-3">
          <p>_______________________</p>
          <p><em>Doctor's Signature</em></p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>

      </div>



    </>
  )
}

export default ReviewPrescription