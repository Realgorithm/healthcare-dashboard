import {
  FiHome,
  FiClock,
  FiCalendar,
  FiList,
  FiBarChart2,
  
} from "react-icons/fi";

export const navigationItems = [
  { id: 1, label: "Dashboard", icon: <FiHome size={16} /> ,active: true},
  { id: 2, label: "History", icon: <FiClock size={16} /> },
  { id: 3, label: "Calendar", icon: <FiCalendar size={16} /> },
  { id: 4, label: "Appointments", icon: <FiList size={16} /> },
  { id: 5, label: "Statistics", icon: <FiBarChart2 size={16} /> },
];
