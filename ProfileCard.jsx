import React, { useState } from 'react';

const ProfileCard = () => {
    const [editMode, setEditMode] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890"
    });

    const handleEdit = () => setEditMode(true);
    
    const handleSave = (e) => {
        e.preventDefault();
        setEditMode(false);
        alert("Profile updated!");
    };

    return (
        <div className="profile-card">
            <h2>User Profile</h2>
            {!editMode ? (
                <div className="profile-info">
                    <p><strong>Name:</strong> {userDetails.name}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Phone:</strong> {userDetails.phone}</p>
                    <button onClick={handleEdit}>Edit Profile</button>
                </div>
            ) : (
                <form onSubmit={handleSave} className="edit-form">
                    <input type="text" value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name: e.target.value})} />
                    <input type="email" value={userDetails.email} onChange={(e) => setUserDetails({...userDetails, email: e.target.value})} />
                    <input type="tel" value={userDetails.phone} onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})} />
                    <button type="submit">Save Changes</button>
                </form>
            )}
        </div>
    );
};

export default ProfileCard;
