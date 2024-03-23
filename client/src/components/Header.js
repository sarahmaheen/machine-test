import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleEmployeeList = () => {
    navigate('/employeeList');
  };

  const handleCreateEmployee = () => {
    navigate('/createEmployee');
  };

  return (
    <header className="header-container">
      <h1>Employee Data Storage App</h1>
      <h4>Login To Perform</h4>
      <nav>
        <button onClick={handleEmployeeList}>Employee List</button>
        <button onClick={handleCreateEmployee}>Create Employee</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
