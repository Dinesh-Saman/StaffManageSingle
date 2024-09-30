// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Dashboard from './Pages/staffDashboard';
import ViewStaff from './Pages/view_staff';
import AddStaff from './Pages/add_staff';
import UpdateStaff from './Pages/update_staff';
import Login from './Pages/login';
import MarkAttendance from './Pages/mark_attendance';
import ViewAttendance from './Pages/view_attendance';
import Register from './Pages/register';
import UserDashboard from './Pages/UserDashboard';
import ViewAllAttendance from './Pages/view_all_attendance';
import ViewAllLeaves from './Pages/view_all_leaves';
import LeaveReportPage from './Pages/leave_report';
import StaffDashboard from './Pages/staffDashboard';

import AddMenu from './Pages/add_menu';
import UpdateMenu from './Pages/update_menu';
import ViewMenu from './Pages/view_menu';
import MenuReport from './Pages/menu_report';
import HomePage from './Pages/Guest/homepage';
import MenuDashboard from './Pages/menuDashboard';
import StaffReport from './Pages/staff_report';
import AttendanceReport from './Pages/attendance_report';
import HomePageMain from './Pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageMain />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view-staff" element={<ViewStaff />} />
        <Route path="/add-staff" element={<AddStaff />} />
        <Route path="/staff-report" element={<StaffReport />} />
        <Route path="/all-attendance" element={<ViewAllAttendance />} />
        <Route path="/update-staff/:id" element={<UpdateStaff />} />

        <Route path="/user/*" element={<UserDashboard />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/view-attendance" element={<ViewAttendance />} />
        <Route path="/view-leaves" element={<ViewAllLeaves />} />
        <Route path="/leave-report" element={<LeaveReportPage />} />
        <Route path="/attendance-report" element={<AttendanceReport />} />

        <Route path="/menu" element={<MenuDashboard />} />
        <Route path="/add-menu" element={<AddMenu />} />
        <Route path="/update-menu/:id" element={<UpdateMenu />} />
        <Route path="/view-menu" element={<ViewMenu />} />
        <Route path="/menu-report" element={<MenuReport />} />

      </Routes>
    </div>
  );
}

export default App;
