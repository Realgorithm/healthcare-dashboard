// components/Activity.js
import React from "react";
import "./styles/ActivitySection.css";
import ActivityImage from "../../assets/activityImg.png";

function ActivitySection({ data }) {
  // Mock data for appointments this week
  const weeklyAppointments = data.map((item) => {
    return item;
  }).length;
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <section className="activitySection">
      <div className="activityHeader">
        <h2 className="activityTitle">Activity</h2>
        <p className="appointmentCount">
          {weeklyAppointments} appointment on this week
        </p>
      </div>

      <img src={ActivityImage} alt="activityImage" className="activityImg" />
      <div className="daysContainer">
        {daysOfWeek.map((day) => (
          <div key={day} className="dayBox">
            {day}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivitySection;
