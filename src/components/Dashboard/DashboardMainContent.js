import React from "react";
import ActivitySection from "./ActivitySection";
import CalendarView from "./CalendarView";
// import HealthStatusCards from "./HealthStatusCards";
import UpcomingSchedule from "./UpcomingSchedule";
import DashboardOverview from "./DashboardOverview";
import "./styles/DashboardMainContent.css";

function DashboardMainContent({calendarData, upcomingAppointments, healthData, anatomyItems}) {
  return (
    // <p>this is dashboard</p>
    <main className="dashboard">
      <div className="leftSectionDashboard">
        <DashboardOverview healthData={healthData} anatomyData={anatomyItems} />
        <ActivitySection data= {upcomingAppointments}/>
      </div>
      <div className="rightSectionDashboard">
        <CalendarView
          data={calendarData}
          upcomingAppointments={upcomingAppointments}
        />
        <UpcomingSchedule data={upcomingAppointments} />
      </div>
    </main>
  );
}

export default DashboardMainContent;
