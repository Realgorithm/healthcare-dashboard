import React from "react";
import "./AppointmentCard.css";

function AppointmentCard({ title, time, doctor, icon, color }) {
  return (
    <div
      className="appointmentCard"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <div className="appointment-details">
        <h5>{title}</h5>
        <p>{time}</p>
        <p>{doctor}</p>
      </div>
      <div className="appointment-icon">
        {icon}
      </div>
    </div>
  );
}

export default AppointmentCard;
