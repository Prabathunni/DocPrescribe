import React from 'react'

function ReviewForm({ formData }) {
  return (
    <div>
      <h4 className="mb-3">Review Information</h4>

      <div className="prescription-wrapper p-4 text-dark text-start" style={{ maxWidth: '800px', margin: 'auto', background: '#fff', border: '1px solid #ccc', fontFamily: 'serif' }}>

        <div className="text-center mb-4">
          <h2>CLINIC NAME HERE </h2>
          <p><strong>Dr. John Smith, MBBS, MD</strong></p>
          <p>+91 9876543210 | Date: {new Date().toLocaleDateString()}</p>
        </div>

        <hr />

        <div className="mb-3">
          <h5>Patient Details</h5>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age} | <strong>Gender:</strong> {formData.gender}</p>
        </div>

        <div className="mb-3">
          <h5>Diagnosis / Notes</h5>
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

        <div className="text-end mt-3">
          <p>_______________________</p>
          <p><em>Doctor's Signature</em></p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>

      </div>



    </div>
  )
}

export default ReviewForm