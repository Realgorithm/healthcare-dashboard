import React from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import "./styles/UpcomingSchedule.css";

function UpcomingSchedule({ data }) {
  const today = new Date();

  // Format day names (e.g., "Monday")
  const formatDayName = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Get today's day name (e.g., "Monday")
  const todayDayName = formatDayName(today);

  // Group appointments by day
  const appointmentsByDay = data.reduce((acc, appointment) => {
    const day = appointment.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(appointment);
    return acc;
  }, {});
console.log(appointmentsByDay["Friday"]);
  // Sort days in order (today first, then upcoming days)
  const sortedDays = Object.keys(appointmentsByDay).sort((a, b) => {
    // Define the correct order of weekdays
    const dayOrder = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    if (a === todayDayName) return -1;
    if (b === todayDayName) return 1;
    // Otherwise sort by weekday order
    return dayOrder[a] - dayOrder[b];
  });
  console.log(sortedDays);

  return (
    <section className="upcomingSchedule">
      {/* Today's Appointments */}
      <div className="dayGroup">
        <div className="appointmentBox">
          {appointmentsByDay[todayDayName] ? (
            appointmentsByDay[todayDayName].map((appointment, index) => (
              <AppointmentCard key={`today-${index}`} {...appointment} />
            ))
          ) : (
            <p>No appointments scheduled for today</p>
          )}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <h3>The Upcoming Schedule</h3>
      {sortedDays
        .filter((day) => day !== todayDayName) // Exclude today
        .map((day, dayIndex) => (
          <div key={`day-${dayIndex}`} className="dayGroup">
            <h4>{`On ${day}`}</h4>
            <div className="appointmentBox">
              {appointmentsByDay[day].map((appointment, index) => (
                <AppointmentCard key={`${day}-${index}`} {...appointment} />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}

export default UpcomingSchedule;
