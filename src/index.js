import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Registration from './pages/Registration';
import Test from './pages/Test';

import PageNotFound from './pages/PageNotFound';
import Sidebar1 from './components/Sidebar1';
import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';

import ApplyForServices from './components/ApplyForServices';
import Postalinformation from './components/Postalinformation';
import StudentDetails from './components/StudentDetails';
import RegisterdDetails from './components/RegisterdDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/Registration" element={<Registration/>} /> 
    <Route path="/student_profile" element={<StudentProfile />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/sidebar" element={<Sidebar1/>} /> 
    <Route path="/student_register" element={<Registration />} /> 
    <Route path="/test" element={<Test />} /> 
     
    <Route path='/*' element={<PageNotFound/>}/>
    <Route path="/ApplyForServices" element={<ApplyForServices/>}/>
    <Route path="/Postalinformation" element={<Postalinformation/>}/>
    <Route path="/StudentDetails" element={<StudentDetails/>}/>
    <Route path="/RegisterdDetails" element={<RegisterdDetails/>}/>
    
     {/* <App /> */}
     </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
