import React from 'react';
import BasicLayout from './BasicLayout';
import { Link } from 'react-router-dom';
import "../css/sidebarPage.css";

const Sidebar = () => {


    
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
<BasicLayout>
<div>
  <div id="mySidenav" className="sidenav">
    <Link href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</Link>
    <Link href="#">About</Link>
    <Link href="#">Services</Link>
    <Link href="#">Clients</Link>
    <Link href="#">Contact</Link>
  </div>
  <h2>Animated Sidenav Example</h2>
  <p>Click on the element below to open the side navigation menu.</p>
  <span style={{fontSize: "30", cursor: 'pointer'}} onclick={()=>openNav()}>☰ open</span>
</div>



</BasicLayout>
  
}

export default Sidebar