import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import "../css/registration.css"
import{useNavigate,Link} from "react-router-dom"
import BasicLayout from './BasicLayout'
import axios from "axios"

import StudentRegistration from '../components/StudentRegistration'
import OrganizationRegistration from '../components/OrganizationRegistration'


const Registration = () => {
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

    const [regtype,setReg]=useState("");
      function handleChange (e) {
     setReg( e.target.value);

      }

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
        // console.log(res);
        // console.log(typeof(res));
       
        // console.log(isOtpGen);
        // console.log(typeof(isOtpGen));
      //   if(res){
      //    setOtpId(parseInt(res));
      //  console.log(otpId);
      //   if(otpId >= 1)
      //     {
      //        alert(otpId);
      //   }
      //   else
      //   {
      //     alert("otp is not not not generated");
      //   }
      // }
 
   

// console.log(DOB);
// async function handleRegistration(e){
// e.preventDefault();
// const para = {
//     "Name":Name,
//     "Email":Email,
//     "DOB":DOB,
//     "Phone":Phone,
//     "RollNumber":RollNumber,
//     "StudentClass":StudentClass,
//     "Password":Password
// }

// const res = await fetch("https://localhost:7159/api/Registration/user_register",{
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify(para)
// }).then(response => response.json());
// console.log("dob  "+ DOB);
// setResBody(res);
// console.log(res);
// console.log(resBody);
// alert(resBody);
// }

  return (
    <BasicLayout> 
      
      <div>     
            <select  id="regType" className='RegistrationOption'  value={regtype} onChange={handleChange}>
      <option >Select Registration Type</option>
        <option value="Student">Student</option>
        <option value="Organization">Organization</option>
      </select>

      {regtype === "Student" && <StudentRegistration/> }
      { regtype === "Organization" && <OrganizationRegistration/> }
      </div>



</BasicLayout>
  
  )
}

export default Registration