// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/admin/employeeList');
//         setEmployees(response.data.allData);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Image</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobileNumber}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>
//                 <img src={employee.imgUrl} alt="Employee" style={{ width: '50px', height: '50px' }} />
//               </td>
//               <td>{employee.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;

























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/admin/employeeList');
//         setEmployees(response.data.allData);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Creation Date</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobileNumber}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>{new Date(employee.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
//               <td>{employee.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/admin/employeeList');
//         setEmployees(response.data.allData);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Creation Date</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobileNumber}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>{new Date(employee.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
//               <td>{employee.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;








































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/admin/employeeList');
//         setEmployees(response.data.allData);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   const handleEdit = (id) => {
//     // Navigate to edit route with employee ID
//     navigate(`/editEmployee/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/admin/delete/${id}`);
//       const response = await axios.get('/api/admin/employeeList');
//       setEmployees(response.data.allData);
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Creation Date</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobileNumber}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>{new Date(employee.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
//               <td>{employee.role}</td>
//               <td>
//                 <button onClick={() => handleEdit(employee._id)}>Edit</button>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/admin/employeeList');
//         setEmployees(response.data.allData);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   // Filter employees based on search term
//   const filteredEmployees = employees.filter(employee => {
//     return (
//       employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       employee.mobileNumber.includes(searchTerm) ||
//       new Date(employee.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).includes(searchTerm)
//     );
//   });

//   const handleEdit = (id) => {
//     // Navigate to edit route with employee ID
//     navigate(`/editEmployee/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/admin/delete/${id}`);
//       const response = await axios.get('/api/admin/employeeList');
//       setEmployees(response.data.allData);
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <input
//         type="text"
//         placeholder="Search by name, email, phone, or date"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Creation Date</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEmployees.map((employee, index) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobileNumber}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>{new Date(employee.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
//               <td>{employee.role}</td>
//               <td>
//                 <button onClick={() => handleEdit(employee._id)}>Edit</button>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;






















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/admin/employeeList');
        setEmployees(response.data.allData);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const handleEdit = (id) => {
    navigate(`/editEmployee/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/delete/${id}`);
      const response = await axios.get('/api/admin/employeeList');
      setEmployees(response.data.allData);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h2>Employee List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobileNumber}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>
                {new Date(employee.createdAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </td>
              <td>
                <button onClick={() => handleEdit(employee._id)}>Edit</button>
                <button onClick={() => handleDelete(employee._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
