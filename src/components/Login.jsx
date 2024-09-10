import React, { useState } from 'react'
import "../css/login.css"
import Button from "react-bootstrap/Button";
import { useNavigate,Link } from 'react-router-dom';
import BasicLayout from '../pages/BasicLayout';
import LogonImage from "../static/dark-background.png"
import { Repeat } from '@mui/icons-material';

const Login = () => {
    const[username,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const[resBody,setResBody] = useState([]);
    const navigate = useNavigate();

    let resp;
async function handleLogin(e){
    e.preventDefault();
    alert("username = "+ username + " and password = "+ password);
    const para = {
      "Name": username,
      "Password":password
    }
     resp = await fetch("https://localhost:7159/api/Login/login",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(para)
}).then(response => response.json());
// .then(function(res){ console.log(res.body?.getReader().read().then((val) => 
//   console.log(new TextDecoder().decode(val.value))
//   ))
  
  
//   })
// .catch(function(res){ console.log(res) })


// const resBody = await resp.json()
// console.log(resBody[0].userName +" "+ resBody[0].password);
setResBody(resp)
console.log(resBody);
console.log(resp);
console.log(resp.map(a=> a.userName));
console.log( resp + " type "+typeof(resp));
    // resp.body?.getReader().read().then((value)=> console.log(new TextDecoder().decode(value.value)))
    // const respBody =await resp.body?.getReader().read();
    // const respBodyArray = new TextDecoder().decode(respBody.value)
    // setResBosy(respBodyArray)
    // console.log(respBodyArray);
   console.log(resBody.length)
   if(resBody.length > 0) {
    alert("Login successfull")
    setUserName("");
    setPassword("")
    
   }
}

  return (
    <BasicLayout>
    <div style={{ backgroundImage: `url(${LogonImage})`}}>
         {/* {resp.map(a=>(
        <div>
           <h1>{a.userName}</h1>
         <h3>{a.password}</h3>
        </div>))} */}
      
          {resBody.map(a=>(
        <div>
           <h1>{a.userName}</h1>
         <h3>{a.password}</h3> 
         </div>))}

         <div className='loginFormContainer'>
            <form onSubmit={handleLogin} id='loginForm'>
            <h2 className='my-5 fw-bold'>Login</h2>
           
            <div class="input-container">
            <input  required  type='text'  value={ username} onChange={(e)=>setUserName(e.target.value)}/>
           <label>Registration No</label>
           </div>
           <div class="input-container">	
            <input required  type='password' value={ password} onChange={(e)=>setPassword(e.target.value)}/>
            <label>Mobile No</label>
            </div>
           <div className='d-flex flex-wrap'><p className='text-secondary fs-200'>Did'nt Registered yet ?  </p><Link to="/student_register">Register here</Link></div> {/* <input className='inputTag'   value={"Login"} /> */}
            <Button className='loginBtn mx-auto my-5 fw-bold' type='submit' variant="primary">Login</Button>
           
        </form>
     </div>
        
     </div>
     </BasicLayout>
  )
}

export default Login