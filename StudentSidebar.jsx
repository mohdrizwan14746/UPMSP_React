import React from 'react'
import { useState } from "react";
import "../css/studentSidebar.css";

const StudentSidebar = () => {
    
  return (

       
   <div class="d-flex flex-column flex-shrink-0 sidebar-wrap">
                <a href="/" class="text-decoration-none logo-wrap">
                    <div class="icon-wrap"><i class="fab fa-slack"></i></div>
                    <span>UPMSP</span>
                </a>
               
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">
                            <div class="icon-wrap">
                                <i class="fas fa-home"></i>
                            </div>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <div class="icon-wrap">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            <span>Aplly For Services</span>
                        </a>
                    </li>
                    
                    {/* <li>
                        <a href="#" class="nav-link">
                            <div class="icon-wrap">
                            
                          <span> <select> 
                         <option value="">Request</option>
                        <option value="">Verification</option>
                        </select>
                              </span> 
                              
                         </div>           
                 </a>
                     </li> */}
                           </ul> 
                      </div>
   
  )
}

export default StudentSidebar
