import React, { useState } from 'react';

const DoctorCard = ({ name, speciality }) => {
    const [hasAppointment, setHasAppointment] = useState(true);

    const handleCancel = () => {
        const confirmCancel = window.confirm("Do you really want to cancel this appointment?");
        if (confirmCancel) {
            setHasAppointment(false);
            alert("Appointment cancelled successfully.");
        }
    };

    return (
        <div className="doctor-card">
            <h4>Dr. {name}</h4>
            <p>{speciality}</p>
            {hasAppointment ? (
                <button onClick={handleCancel} className="btn-cancel">Cancel Appointment</button>
            ) : (
                <button className="btn-book">Book New Appointment</button>
            )}
        </div>
    );
};

export default DoctorCard;
