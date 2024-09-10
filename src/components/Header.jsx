import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../static/LogoBig.png";
import "../css/header.css";

/* Option 2: Import via CSS */


const Header = () => {

  function toggleClick ()  {
   const x = document.getElementById('menu') 
   if(x.style.display == 'block')
    { 
      x.style.display  = 'none';
    }
   else{
    x.style.display = 'block';
  }
  
  };

  return (
  
  //  <div className='headerContainer d-flex'>
  //   <div className='brandContainer d-flex'>
        
  //       <img className='brandLogo my-auto ' alt='upboard Logo' src={Logo}/>
  //       <div className='brandName d-flex flex-column justify-content-center align-items-center mx-2'>
  //       <h6 className='d-flex align-item-center text-center fw-bold'>Madhyamik Shiksha Parishad</h6>
  //       <h6 className='d-flex align-item-center fw-bold'>Allahabad,Uttar Pradesh</h6>
  //       </div>
  //   </div>
  //   <div className='navigationMenu d-flex justify-content-end'>
  //     <div className='d-flex justify-content-center align-items-center gap-2'>  
             
  //        <Link className='linkClass px-3' to={"/home"}>Home</Link>
  //       <Link className='linkClass px-3' to={"/login"}>Login</Link>
  //       <Link className='linkClass px-3' to={"/student_register"}>Registration</Link>
  //       </div>
  //   </div>
  //  </div>
<>
<div className='Navbar'>
<img  alt='upboard Logo' src={Logo}/>
<h6 className='Heading'>Madhyamik Shiksha Parishad <br></br> &nbsp;&nbsp; Allahabad,Uttar Pradesh</h6>
  <div className='menubar'>
  <span id='click' onClick={toggleClick}>&#9776;</span> 
    <ul id="menu">
      <li><Link className='linkClass' to={"/home"}>Home</Link></li>
      <li>   <Link className='linkClass' to={"/login"}>Login</Link></li>
      <li><Link className='linkClass' to={"/student_register"}>Registration</Link></li>
    </ul>
    
  </div>
</div>
</>
  )
}

export default Header