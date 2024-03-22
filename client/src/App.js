import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
      {/* <Route path="/" element={<Dashboard />} />
      <Route path='/createEmployee' element={<CreateEmployee/>}/>
      <Route path='/editEmployee/:id' element={<EditEmployee/>}/>
      <Route path='/employeeList' element={<EmployeeList/>}/> */}
     
      <Route path='/' element={<Login/>}/> 
      <ProtectedRoute path='/dashboard' element={<Dashboard/>}/>
      <ProtectedRoute path='/createEmployee' element={<CreateEmployee/>}/>
      <ProtectedRoute path='/editEmployee/:id' element={<EditEmployee/>}/>
      <ProtectedRoute path='/employeeList' element={<EmployeeList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;



















// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import CreateEmployee from './components/CreateEmployee';
// import EditEmployee from './components/EditEmployee';
// import EmployeeList from './components/EmployeeList';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Unprotected routes */}
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/createEmployee"
//           element={
//             <ProtectedRoute>
//               <CreateEmployee />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/editEmployee/:id"
//           element={
//             <ProtectedRoute>
//               <EditEmployee />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/employeeList"
//           element={
//             <ProtectedRoute>
//               <EmployeeList />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



















// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import CreateEmployee from './components/CreateEmployee';
// import EditEmployee from './components/EditEmployee';
// import EmployeeList from './components/EmployeeList';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Unprotected routes */}
//         <Route path="/" element={<Login />} />

//         {/* Protected routes */}
//         <ProtectedRoute path="/Dashboard" element={<Dashboard />} />
//         <ProtectedRoute path="/createEmployee" element={<CreateEmployee />} />
//         <ProtectedRoute path="/editEmployee/:id" element={<EditEmployee />} />
//         <ProtectedRoute path="/employeeList" element={<EmployeeList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;











// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import CreateEmployee from './components/CreateEmployee';
// import EditEmployee from './components/EditEmployee';
// import EmployeeList from './components/EmployeeList';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Login route */}
//         <Route path="/" element={<Login />} />

//         {/* Protected routes */}
//         <ProtectedRoute path="/dashboard" element={<Dashboard />} />
//         <ProtectedRoute path="/createEmployee" element={<CreateEmployee />} />
//         <ProtectedRoute path="/editEmployee/:id" element={<EditEmployee />} />
//         <ProtectedRoute path="/employeeList" element={<EmployeeList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


