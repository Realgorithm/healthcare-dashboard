import "./styles/CalendarView.css";

function CalendarView({ data , upcomingAppointments}) {
  // Get current date and set up the week starting from yesterday
  const today = new Date();
  const todayDate = today.getDate();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Function to check if a time slot has an appointment
  const hasAppointment = (dayName, time) => {
    // First validate the time format
    if (!time || !/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
      return false; // Return false if time is blank or not in hh:mm format
    }
    return upcomingAppointments.some(
      (appt) =>
        appt.day.toLowerCase().includes(dayName.toLowerCase()) &&
        appt.time.includes(time.replace(":00", ""))
    );
  };

  // Generate the next 7 days starting from yesterday
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(yesterday);
    day.setDate(yesterday.getDate() + i);
    weekDays.push(day);
  }
  // Format day names (Mon, Tue, etc.)
  const formatDayName = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  // Format date number (25, 26, etc.)
  console.log(data.days.date)
  const formatDateNum = (date) => {
    return date.getDate();
  };
  return (
    <div className="calendar-container">
      <h3 className="calendar-title">
        {today.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      <span>⬅️ ➡️</span>
      </h3>

      <table className="calendar-grid">
        <thead>
          <tr className="header-row">
            {/* <th className="calendar-cell"></th> */}
            {weekDays.map((day, index) => {
              return (
                <th
                  key={`header-${index}`}
                  className={`calendar-cell day-header ${
                    formatDateNum(day) === todayDate ? "today" : ""
                  }`}
                >
                  <div>{formatDayName(day)}</div>
                  <div className="date-number">{formatDateNum(day)}</div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Time slots rows */}
          {[0, 1, 2].map((rowIndex) => (
            <tr key={`row-${rowIndex}`} className="calendar-row">
              {weekDays.map((day, dayIndex) => {
                const dayNum = formatDateNum(day);
                const dataDay = data.days.find((d) => d.date === dayNum);
                const timeSlot = dataDay ? dataDay.times[rowIndex] : "";
                const isToday = formatDateNum(day) === todayDate;
                const hasAppt = hasAppointment(formatDayName(day), timeSlot);
                return (
                  <td
                    key={`slot-${dayIndex}-${rowIndex}`}
                    className={`
                      calendar-cell time-slot 
                      ${isToday ? "today" : ""}
                      ${hasAppt ? "has-appointment" : ""}
                    `}
                  >
                    {timeSlot || "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarView;
