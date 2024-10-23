import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { StudentRegistration } from './pages/students/StudentRegistration';
import { StudentList } from './pages/students/StudentList';
import { StudentCard } from './pages/students/StudentCard';
import { PaymentManagement } from './pages/payments/PaymentManagement';
import { Reports } from './pages/reports/Reports';
import { PrivateRoute } from './components/auth/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students/register" element={<StudentRegistration />} />
          <Route path="/students/list" element={<StudentList />} />
          <Route path="/students/card/:id" element={<StudentCard />} />
          <Route path="/payments" element={<PaymentManagement />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;