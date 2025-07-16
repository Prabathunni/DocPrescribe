import React from 'react'

function PatientDetailsForm( { formData, setFormData } ) {
    return (
        <>
            <h4 className='mb-3'>Patient Details</h4>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="form-control mb-2"
            />
            <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={e => setFormData({ ...formData, age: e.target.value })}
                className="form-control mb-2"
            />
            <select
                value={formData.gender}
                onChange={e => setFormData({ ...formData, gender: e.target.value })}
                className="form-control mb-2"
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </>)
}

export default PatientDetailsForm