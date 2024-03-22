import React, { useState } from 'react';
import axios from 'axios';

function CreateEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [imgFile, setImgFile] = useState(null);

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const uploadImageToCloudinary = async () => {
    if (!imgFile) {
      console.log("Image file is required.");
      return;
    }

    try {
      let formData = new FormData();
      formData.append('file', imgFile);
      formData.append('upload_preset', 'images_preset')
      let cloudname = 'drgqcwxq6';
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData)
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  };




const handleSubmit = async () => {
    try {
      const imgUrl = await uploadImageToCloudinary();
  
      const formData = {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        designation: designation,
        gender: gender,
        course: course,
        imgUrl: imgUrl
      };
      console.log(formData)
      // Reorder the properties according to backend's expected order
      
  
      const response = await axios.post('/api/admin/createEmployee', formData);
      console.log('Employee registered successfully:', response.data);
    } catch (error) {
      console.error('Error registering employee:', error.response.data.error);
    }
  };
  

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      </div>
      <div>
        <label>Mobile Number</label>
        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter mobile number" />
      </div>
      <div>
        <label>Designation</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter designation" />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter gender" />
      </div>
      <div>
        <label>Course</label>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter course" />
      </div>
      <div>
        <label>Image Upload</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>Register Employee</button>
      </div>
    </div>
  );
}

export default CreateEmployee;
