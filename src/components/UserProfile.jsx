import React from "react";

const UserProfile = ({ user, handleLogout }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Welcome, {user.name}!</h2>
          <h4 className="card-text">Email: {user.email}</h4>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
