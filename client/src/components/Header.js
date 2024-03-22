import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage or cookies
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  const handleEmployeeList = () => {
    // Redirect to employee list page
    navigate('/employeeList');
  };

  const handleCreateEmployee = () => {
    // Redirect to create employee page
    navigate('/createEmployee');
  };

  return (
    <header>
      <h1>My Application</h1>
      <nav>
        <button onClick={handleEmployeeList}>Employee List</button>
        <button onClick={handleCreateEmployee}>Create Employee</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
