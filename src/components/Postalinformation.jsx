import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const Postalinformation = () => {
    const[contactNumber,setContactNumber]=useState("");
    const[email,setEmail]=useState("");
    const[dOb,setDOB]=useState("");
    const[address1,Address1]=useState("");
    const[address2,Address2]=useState("");
    const[address3,Address3]=useState("");
    const[PinCode,setPinCode]=useState("");
    const[Sate,setSate]=useState("");
    const[District,setDistrict]=useState("");
    
    


  return (
    <>
      <div className='contanier-fluid '>
        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Contact Number:</label>
            <input className='col-6' type="Text" value={contactNumber}  onChange={(e)=>setContactNumber(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Email ID:</label>
            <input className='col-6' type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Date Of Birth:</label>
            <input className='col-6' type="Date" value={dOb} onChange={(e)=>setDOB(e.target.value)} ></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Address Line 1:</label>
            <input className='col-6' type="Text" value={address1} onChange={(e)=>Address1(e.target.value)} ></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Address Line 2:</label>
            <input className='col-6' type="Text" value={address2} onChange={(e)=>Address2(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Address Line 3:</label>
            <input className='col-6' type="Text" value={address3}  onChange={(e)=>Address3(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Pin Cod:</label>
            <input className='col-6' type="Text" value={PinCode} onChange={(e)=>setPinCode(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>Sate:</label>
            <input className='col-6' type="Text" value={Sate} onChange={(e)=>setSate(e.target.value)}></input>
        </div>

        <div className='row my-2 d-flex justify-content-center'>
            <label className='col-2'>District</label>
            <input className='col-6' type="Text" value={District} onChange={(e)=>setDistrict(e.target.value)}></input>
        </div>
      <Button className='btn bg-primary' type="submit" >Submit</Button>
        
      </div>
    </>
  )
}

export default Postalinformation
