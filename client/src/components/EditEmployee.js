import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditEmployee() {
  const { id } = useParams(); 
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    designation: '',
    gender: '',
    course: '',
    imgUrl: ''
  });
  
// calling the details of employee by its Id
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/admin/employee/${id}`); // Fetch employee data by ID
        setEmployee(response.data); // Set the fetched employee data in state
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // handling the edit task
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(employee)
     const response= await axios.put(`/api/admin/edit/${id}`, employee); 
    
    console.log(response.data.success)
      
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} />
        <label>Mobile Number</label>
        <input type="text" name="mobileNumber" value={employee.mobileNumber} onChange={handleChange} />
        <label>Designation</label>
        <input type="text" name="designation" value={employee.designation} onChange={handleChange} />
        <label>Gender</label>
        <input type="text" name="gender" value={employee.gender} onChange={handleChange} />
        <label>Course</label>
        <input type="text" name="course" value={employee.course} onChange={handleChange} />
        <label>Image URL</label>
        <input type="text" name="imgUrl" value={employee.imgUrl} onChange={handleChange} />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;

