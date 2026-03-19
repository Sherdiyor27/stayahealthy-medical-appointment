import React, { useState } from 'react';

const AppointmentFormIC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment submitted for ${name}`);
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form-ic">
            <h3>Instant Consultation</h3>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button type="submit" className="btn-primary">Book Now</button>
        </form>
    );
};

export default AppointmentFormIC;
