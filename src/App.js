import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/Dashboard/DashboardMainContent";
import { anatomyItems } from "./data/anatomyItems";
import { healthData } from "./data/healthData";
import { upcomingAppointments } from "./data/appointments";
import { navigationItems } from "./data/navigation";
import { calendarData } from "./data/calendar";
import  "./App.css";

function App() {
  return (
    <div className="app">
      <div className="leftSectionApp">
        <Sidebar items = {navigationItems}/>
      </div>
      <div className="rightSectionApp">
        <Header />
        <DashboardMainContent  anatomyItems = {anatomyItems} calendarData ={calendarData} upcomingAppointments = {upcomingAppointments} healthData ={healthData}/>
      </div>
    </div>
  );
}

export default App;
