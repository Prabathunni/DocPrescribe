import MedicineSuggest from './MedicineSuggest';

function MedicineForm({ formData, setFormData }) {

  const { medicines } = formData;

  const handleAddMedicine = (name) => {
    const newMedicine = {
      name,
      dosage: '',
      frequency: '',
      route: ''
    };

    setFormData(prev => ({
      ...prev,
      medicines: [...prev.medicines, newMedicine]
    }));
  };


  const handleMedicineChange = (index, field, value) => {
    const updateMeds = [...medicines];
    updateMeds[index][field] = value;

    setFormData(prev => ({
      ...prev,
      medicines: updateMeds
    }))
  };


  const handleRemoveMedicine = (index) => {
    const updatedMeds = [...medicines];

    updatedMeds.splice(index, 1);

    setFormData(prev => ({
      ...prev,
      medicines: updatedMeds
    }));
  }



  return (
    <div>
      <h4 className='mb-4'>Medicine Details</h4>

      <MedicineSuggest onSelect={handleAddMedicine} />

      {formData.medicines.map((med, idx) => (
        <div key={idx} className="mb-3 border p-4 rounded bg-light text-dark text-start">

          <div className='d-flex justify-content-between align-items-center'>
            <strong>Medicine No: {idx + 1}</strong>
            <button onClick={() => handleRemoveMedicine(idx)} className='btn btn-danger btn-sm'>Remove</button>
          </div>

          <hr />

          <label htmlFor="medname">Name:</label>
          <input id='medname' type="text" value={med.name} className='form-control mb-2' readOnly />

          <div className='d-flex gap-3'>

            <div>
              <label htmlFor='dose'>Dose </label>
              <input id='dose' type="text" placeholder="Dosage" value={med.dosage} onChange={e => handleMedicineChange(idx, "dosage", e.target.value)}
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="routee">Route </label>
              <select id='routee' className='form-select' name="med-route" value={med.route} onChange={e => handleMedicineChange(idx, "route", e.target.value)}>

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

            </div>

            <div>
              <label htmlFor="freq">Frequency</label>
              <select id='freq' value={med.frequency || ""} onChange={e => handleMedicineChange(idx, "frequency", e.target.value)} className="form-select flex-fill">
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




        </div>
      ))}

    </div>
  )
}

export default MedicineForm