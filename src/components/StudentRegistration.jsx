import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import "../css/registration.css"
import{useNavigate,Link} from "react-router-dom"

import axios from "axios"

const StudentRegistration = () => {
  const[Name,setName] = useState("");
    const[Email,setEmail] = useState("");
    const[DOB,setDob] = useState("");
    const[Phone,setPhone]= useState("");
    const[RollNumber,setRollNumber]=useState("");
    const[StudentClass,setStudentClass]=useState("");
    const[Password,setPassword]= useState("");
    const[resBody,setResBody]=useState([]);
    const[isOtpGen,setIsOtpGen]=useState(0);
    const[otpId,setOtpId]=useState("");
    const[opt,setOtp]=useState();
    const [otpVerRes,setOtpVerRes] = useState({});
    const navigate = useNavigate();

    let para = {
      "studentName":Name,
          "emailId":Email,
          "dob":DOB,
          "mobileno":Phone,
          
          // "StudentClass":StudentClass,
          // "Password":Password

    }

    let res;
    async function handleRegistration(e)
    {
      e.preventDefault();
       res = await fetch("https://localhost:7159/api/ValidateRegAndGenOtp",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body:JSON.stringify(para)
        }).then( response => response.json());
        res ? setOtpId(res):alert("not found");
      }
      const otpVerificationJson = {
        "otpId":otpId,
        "otp":opt
      }
      async function otpValidate(e)
      {e.preventDefault();
        alert("otp Validate");
        alert(otpId)

        // const respFunc = async ()=>{
        //  const  resp = await axios.post("https://localhost:7159/api/ValidateRegAndGenOtp/otp_verification",{otpVerificationJson},{
        //   method:"post",
        //   headers:{
        //     "Content-Type":"application/json",
            
        //   }
        //  })
        
        const respMess =await fetch("https://localhost:7159/api/ValidateRegAndGenOtp/otp_verification",{
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body:JSON.stringify(otpVerificationJson)
          })
      const resp =  await respMess.json();
        
        
        
      //   const resp =await fetch("https://localhost:7159/api/ValidateRegAndGenOtp/otp_verification",{
      //     headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     method: "POST",
      //     body:JSON.stringify(otpVerificationJson)
      // }).then(async response => await  response.json());
      resp ? setOtpVerRes(resp) : alert("NOT found otp verification response")
        console.log(resp);
         //console.log(resp.Message);
         alert(resp.Message);
         console.log(otpVerRes);
         console.log(typeof(otpVerRes.Status));
        //  alert(otpVerRes.Message);
        }
        
      if(otpVerRes.success === true ){
        alert("otp verified from save registration")
        
      }
     
      
   async function saveFinalRegistration(e){
              e.preventDefault();
              alert("otp verified from save registration");
            
        const respMess =await fetch("https://localhost:7159/api/Registration/save_registration",{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body:JSON.stringify(para)
      })
  const resp =  await respMess.json();

  console.log(resp);

   }





  return (
    <>
      <div id='registerForm'>
        <h1 className='my-5'>Register</h1>
    <form onSubmit={handleRegistration} >
  
    <table>
      <tr>
        <td>
          <label for="Name">Student Name:</label>
        </td>
        <td>
        <input required className='inputTag' type='text' placeholder='Student Name' value={ Name} onChange={(e)=>setName(e.target.value)}/>
      </td>
    </tr>
    <tr>
        <td>
          <label for="Name">Email:</label>
        </td>
        <td>
        <input required className='inputTag' type='email' placeholder=' Email' value={ Email} onChange={(e)=>setEmail(e.target.value)}/>
        </td>
    </tr>
    <tr>
        <td>
          <label for="Name">DOB:</label>
        </td>
        <td>
        <input required className='inputTag' type='date' placeholder=' Date of birth' value={ DOB} onChange={(e)=>setDob(e.target.value)}/>
        </td>
    </tr>
    <tr>
        <td>
          <label for="Name">Phone/Mobile:</label>
        </td>
        <td>
        <input required className='inputTag' type='tel' pattern="[0-9]{10}"  placeholder=' Phone/Mobile' value={ Phone} onChange={(e)=>setPhone(e.target.value)}/>
        </td>
    </tr>
    {/* <input required className='inputTag' type='text' placeholder=' Roll Number' value={ RollNumber} onChange={(e)=>setRollNumber(e.target.value)}/>
    <input required className='inputTag' type='text' placeholder=' Class' value={ StudentClass} onChange={(e)=>setStudentClass(e.target.value)}/>
    <input required className='inputTag' type='password' placeholder=' Password' value={ Password} onChange={(e)=>setPassword(e.target.value)}/> */}
    <tr>
      <td>
   <div className='d-flex'><p className='text-secondary fs-10'>Already have an account ? </p><Link to={"/login"}>Login here</Link></div> {/* <input className='inputTag'   value={"Login"} /> */}
   </td>
   </tr>
   </table>
    <Button className='registerBtn mx-auto my-5 fw-bold' type='submit' variant="primary">Register</Button>
    { otpId > 0 ? ( <> <input required   className='' type='text' placeholder=' OTP' value={ opt} onChange={(e)=>setOtp(e.target.value)}/>
    <Button   className='otpBtn mx-auto my-5 fw-bold btn-success' type='submit' onClick={(e)=>otpValidate(e)} variant="primary" >Verify OTP</Button></>):""}
    
    {
      otpVerRes.Success === "true" ? (<><Button  onClick={(e)=>saveFinalRegistration(e)} >Save Final</Button></>):""
    }
    
</form>


   </div>
    </>
  )
}

export default StudentRegistration
