import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "./styles/DashboardOverview.css";

function DashboardOverview({anatomyData, healthData}) {
  return (
    // <p>this is dashboard</p>
    <main className="dashboardOverview">
      <div className="topSection">
        <h1>Dashboard</h1>
        <p>This Week 🔽</p>
      </div>
      <div className="bottomSection">
        <div className="leftSection">
          <AnatomySection data={anatomyData} />
          {/* <p>Anatomy</p> */}
        </div>
        <div className="rightSection">
          <HealthStatusCards data={healthData} />
          {/* <p>healthcard</p> */}
        </div>
      </div>
    </main>
  );
}

export default DashboardOverview;
