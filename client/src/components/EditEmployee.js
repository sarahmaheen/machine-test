// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function EditEmployee() {
//     const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [gender, setGender] = useState('');
//   const [course, setCourse] = useState('');
//   const [imgFile, setImgFile] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(`/api/admin/employees/${id}`);
//         setEmployee(response.data);
//         setName(response.data.name);
//         setEmail(response.data.email);
//         setMobileNumber(response.data.mobileNumber);
//         setDesignation(response.data.designation);
//         setGender(response.data.gender);
//         setCourse(response.data.course);
//       } catch (error) {
//         console.error('Error fetching employee:', error);
//       }
//     };
//     fetchEmployee();
//   }, [id]);

//   const handleFileChange = (e) => {
//     setImgFile(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('mobileNumber', mobileNumber);
//       formData.append('designation', designation);
//       formData.append('gender', gender);
//       formData.append('course', course);
//       if (imgFile) {
//         formData.append('file', imgFile);
//         formData.append('upload_preset', 'images_preset'); // Adjust the upload preset accordingly
//         const cloudname = 'drgqcwxq6'; // Your cloudinary cloud name
//         const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData);
//         formData.append('imgUrl', response.data.secure_url);
//       }
//       await axios.put(`/api/admin/edit/${id}`, formData);
//       console.log('Employee profile updated successfully');
//     } catch (error) {
//       console.error('Error updating employee profile:', error.response.data.error);
//     }
//   };

//   if (!employee) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div>
//         <label>Name</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
//       </div>
//       <div>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
//       </div>
//       <div>
//         <label>Mobile Number</label>
//         <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter mobile number" />
//       </div>
//       <div>
//         <label>Designation</label>
//         <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter designation" />
//       </div>
//       <div>
//         <label>Gender</label>
//         <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter gender" />
//       </div>
//       <div>
//         <label>Course</label>
//         <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter course" />
//       </div>
//       <div>
//         <label>Image Upload</label>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//       </div>
//       <div>
//         <button onClick={handleSubmit}>Update Profile</button>
//       </div>
//     </div>
//   );
// }

// export default EditEmployee;

















































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditEmployee() {
  const { id } = useParams(); // Get the employee ID from the URL params
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    designation: '',
    gender: '',
    course: '',
    imgUrl: ''
  });
  const [successMessage, setSuccessMessage] = useState('');


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
  }, [id]); // Fetch employee data whenever ID changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(employee)
     const response= await axios.put(`/api/admin/edit/${id}`, employee); 
    //   setSuccessMessage(response.data.success)
    console.log(response.data.success)
      // Send PUT request to update employee data
      // Redirect or show success message
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

