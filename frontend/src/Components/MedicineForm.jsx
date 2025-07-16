import React from 'react'

function MedicineForm({ formData, setFormData }) {

  const handleMedicineChange = (index, field, value) => {
    const updated = [...formData.medicines];
    updated[index][field] = value;
    setFormData({ ...formData, medicines: updated });
  };

  const addMedicine = () => {
    setFormData({
      ...formData,
      medicines: [...formData.medicines, { name: "", dosage: "", frequency: "" }]
    });
  };

  return (
    <div>
      <h4 className='mb-4'>Diagnosis and Medicine Details</h4>


      <textarea
        rows={3}
        placeholder="Enter diagnosis details"
        value={formData.diagnosis}
        onChange={e => setFormData({ ...formData, diagnosis: e.target.value })}
        className="form-control mb-3"
      />

      {formData.medicines.map((med, idx) => (
        <div key={idx} className="mb-3 border p-2 rounded">
          
          <input
            type="text"
            placeholder="Medicine Name"
            value={med.name}
            onChange={e => handleMedicineChange(idx, "name", e.target.value)}
            className="form-control mb-2"
          />

          <div className='d-flex gap-3'>

            <input type="text" placeholder="Dosage" value={med.dosage} onChange={e => handleMedicineChange(idx, "dosage", e.target.value)}
              className="form-control"
            />

            <select className='form-select' name="med-route" value={med.route} onChange={e => handleMedicineChange(idx, "route", e.target.value)}>

              <option value="">Select route</option>

              <optgroup label="Common Routes">
                <option value="PO">Oral (PO)</option>
                <option value="SL">Sublingual (SL)</option>
                <option value="Topical">Topical</option>
                <option value="IV">Intravenous (IV)</option>
                <option value="IM">Intramuscular (IM)</option>
                <option value="SC">Subcutaneous (SC)</option>
              </optgroup>

              <optgroup label="Other Routes">
                <option value="Inhalational">Inhalational</option>
                <option value="PR">Rectal (PR)</option>
                <option value="Buccal">Buccal</option>
                <option value="Ophthalmic">Ophthalmic</option>
                <option value="Otic">Otic (Ear)</option>
                <option value="Nasal">Nasal</option>
                <option value="Intradermal">Intradermal (ID)</option>
              </optgroup>
            </select>


            <select value={med.frequency || ""} onChange={e => handleMedicineChange(idx, "frequency", e.target.value)} className="form-select flex-fill">
              <option value="">Select Frequency</option>

              <optgroup label="Common Frequencies">
                <option value="Once daily">Once daily (OD)</option>
                <option value="Twice daily">Twice daily (BD)</option>
                <option value="Thrice daily">Thrice daily (TID)</option>
                <option value="Four times daily">Four times daily (QID)</option>
                <option value="Every 6 hours">Every 6 hours</option>
                <option value="Every 8 hours">Every 8 hours</option>
                <option value="Every 12 hours">Every 12 hours</option>
                <option value="At bedtime">At bedtime (HS)</option>
                <option value="As needed">As needed (PRN)</option>
              </optgroup>

            </select>


          </div>



        </div>
      ))}
      <button onClick={addMedicine} className="btn btn-sm btn-outline-warning">
        + Add Another Medicine
      </button>

    </div>
  )
}

export default MedicineForm