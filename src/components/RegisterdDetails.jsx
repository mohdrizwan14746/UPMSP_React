import React from 'react'
import "../css/RegisterdDetails.css"
import { WidthFull } from '@mui/icons-material'
import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'
const RegisterdDetails = () => {
    const navigate = useNavigate();
  return (
    <>
      <div id='Details'>
        <div id='DetailsCont'>
        <h3 id='headRegDetails'> Registerd Details</h3>
        <table >
            <tr><td colSpan={2}><p>( Save creadential for login )</p></td></tr>
            <tr>
                <td >
               <p>Registration No :</p>
                </td>
              
                <td>
                  <p className='regMob'>Registration No</p>
                </td>
            </tr>
            <tr>
            <td >
               <p>Mobile No :</p>
                </td>
                <td>
               <p className='regMob'>Mobile No </p>
                </td>
            </tr>
            <tr className='text-center my-3' ><td colSpan={2}><button className='btn btn-primary' onClick={()=>{navigate("/login")}} >Back to Login page</button></td></tr>
        </table>
        </div>
      </div>
    </>
  )
}

export default RegisterdDetails
