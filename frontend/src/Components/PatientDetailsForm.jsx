import React from 'react'

function PatientDetailsForm({ formData, setFormData }) {
    return (
        <>
            <h4 className='mb-3'>Patient Details</h4>
            <input
                type="text"
                placeholder="Patient Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="form-control mb-2 py-3"
            />

            <div className='d-flex gap-3 mb-3'>

                <input
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                    className="form-control py-3"
                />
                <select
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    className="form-control py-3"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

            </div>

            <textarea
                rows={3}
                placeholder="Enter diagnosis details"
                value={formData.diagnosis}
                onChange={e => setFormData({ ...formData, diagnosis: e.target.value })}
                className="form-control"
            />


        </>
    )
}

export default PatientDetailsForm