import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/createEmployee" element={<ProtectedRoute><CreateEmployee /></ProtectedRoute>} />
        <Route path="/editEmployee/:id" element={<ProtectedRoute><EditEmployee /></ProtectedRoute>} />
        <Route path="/employeeList" element={<ProtectedRoute><EmployeeList /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;