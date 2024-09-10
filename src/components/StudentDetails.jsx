import React, { useState } from 'react'


const StudentDetails = () => {
    const[name,setName]=useState("");
    const[father,setFather]=useState("");
    const[RollNo,setRollNo]=useState("");
    const[year,setYear]=useState("");
    const[Enrollment,setEnrollment]=useState("");
    const[Registration,setRegistration]=useState("");
    const[Division,setDivision]=useState("");
    const[Marks,setMarks]=useState("");
    const[DOB,setDOB]=useState("");
    const[EnivronmentStatus,setEnivronmentStatus]=useState("");
    const[Email,setEmail]=useState("");
    const[Phone,setPhone]=useState("");
    const[ExamType,setExamType]=useState("");
    const[Session,setSession]=useState("");
 
  return (
    <>
    <div>
      <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Name:</label>
            <input className='col-6' type="Text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Father Name:</label>
            <input className='col-6' type="Text" value={father} onChange={(e)=>setFather(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Roll No:</label>
            <input className='col-6' type="Text" value={RollNo} onChange={(e)=>setRollNo(e.target.value)}></input>
        </div>
        
        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Year:</label>
            <input className='col-6' type="Text" value={year} onChange={(e)=>setYear(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Enrollment No:</label>
            <input className='col-6' type="Text" value={Enrollment} onChange={(e)=>setEnrollment(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Registration No:</label>
            <input className='col-6' type="Text" value={Registration} onChange={(e)=>setRegistration(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Division:</label>
            <input className='col-6' type="Text" value={Division} onChange={(e)=>setDivision(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Marks:</label>
            <input className='col-6' type="Text" value={Marks} onChange={(e)=>setMarks(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>DOB:</label>
            <input className='col-6' type="Date" value={DOB} onChange={(e)=>setDOB(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Enivronment Status:</label>
            <input className='col-6' type="Text"value={EnivronmentStatus} onChange={(e)=>setEnivronmentStatus(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Email ID:</label>
            <input className='col-6' type="Email"value={Email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Mobile/Phone:</label>
            <input className='col-6' type="Text"value={Phone} onChange={(e)=>setPhone(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Exam Type:</label>
            <input className='col-6' type="Text"value={ExamType} onChange={(e)=>setExamType(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Session:</label>
            <input className='col-6' type="Text"value={Session} onChange={(e)=>setSession(e.target.value)}></input>
        </div>

       

        </div>
    </>
  )
}

export default StudentDetails
