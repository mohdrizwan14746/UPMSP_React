import React, { useEffect, useState } from "react";
import BasicLayout from "./BasicLayout";
import "../css/studentProfileCOntainer.css";
import Sidebar1 from "../components/Sidebar1";
import Postalinformation from "../components/Postalinformation";
import StudentDetails from "../components/StudentDetails";

const StudentProfile = () => {
  const [sRegistrationNum, setSRegistrationNum] = useState("");
  const [stdName, setStdName] = useState("");
  const [stdFatherName, setStdFatherName] = useState("");
  const [stdClass, setStdClass] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [session, setSession] = useState("");
  const [examType, setExamType] = useState("");
  const [year, setYear] = useState("");
  const [division, setDivision] = useState("");
  const [result, setResult] = useState("");

  const [address, setAddress] = useState("");
  // const [stdClass, setStdClass] = useState("10th");

  let [num, setNum] = useState(1);

  // useEffect(()=>{

  //    async function fetchData(){
  //     const res = await fetch("https://localhost:7159/api/StudentProfile/fill_sprofile/"+{sRegistrationNum},{

  //       headers:{
  //         "accept":"application/json",
  //         "content-type":"application/json"
  //       },
  //       method:"POST",
  //       body:JSON.stringify()
  //      })
  //    }

  // }

  // ,[])

  return (
    <BasicLayout>
      <StudentDetails/>
      <Postalinformation/>
    </BasicLayout>
    // <Sidebar1>
    //   <div className="stdProfile ">
    //     <div className="stdProfileContainer d-flex flex-column gap-5 py-5 px-5">
    //       <div className="d-flex flex-column  basicInfo  p-5 text-warning row-gap-5">
    //         <h2 className="text-start text-decoration-underline px-1 py-3">
    //           Basic Information
    //         </h2>
    //         <div className="d-flex justify-content-between ">
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Student Name :
    //             <input
    //               className="inputField form-control shadow-none"
    //               type="text"
    //               value={stdName}
    //               onChange={(e) => setStdName(e.target.value)}
    //             />
    //           </label>
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Student's Father Name :
    //             <input
    //               className="inputField form-control shadow-none"
    //               type="text"
    //               value={stdFatherName}
    //               onChange={(e) => setStdFatherName(e.target.value)}
    //             />
    //           </label>
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Class :
    //             <select
    //               className="inputField drpDownSelect form-control shadow-none"
    //               value={stdClass}
    //               onChange={(e) => setStdClass(e.target.value)}
    //             >
    //               <option value="10th">10</option>
    //               <option value="12th">12</option>
    //             </select>
    //           </label>
    //         </div>
    //         <div className="d-flex justify-content-between ">
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Roll Number :
    //             <input
    //               className="inputField form-control shadow-none"
    //               type="text"
    //               value={rollNumber}
    //               onChange={(e) => setRollNumber(e.target.value)}
    //             />
    //           </label>
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Session :
    //             <select
    //               className="inputField drpDownSelect form-control shadow-none"
    //               value={session}
    //               onChange={(e) => setSession(e.target.value)}
    //             >
    //               <option value="10th">10</option>
    //               <option value="12th">12</option>
    //             </select>
    //           </label>
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Exam Type :
    //             <select
    //               className="inputField drpDownSelect form-control shadow-none"
    //               value={examType}
    //               onChange={(e) => setExamType(e.target.value)}
    //             >
    //               <option value="10th">10</option>
    //               <option value="12th">12</option>
    //             </select>
    //           </label>
    //         </div>
    //         <div className="d-flex justify-content-between ">
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Year :
    //             <select
    //               className="inputField drpDownSelect form-control shadow-none"
    //               value={year}
    //               onChange={(e) => setYear(e.target.value)}
    //             >
    //               <option value="10th">10</option>
    //               <option value="12th">12</option>
    //             </select>
    //           </label>
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Division :
    //             <select
    //               className="inputField drpDownSelect form-control shadow-none"
    //               value={division}
    //               onChange={(e) => setDivision(e.target.value)}
    //             >
    //               <option value="10th">10</option>
    //               <option value="12th">12</option>
    //             </select>
    //           </label>
    //           <label className="d-flex flex-column inputFieldContainer">
    //             Result :
    //             <select
    //               className="inputField drpDownSelect form-control shadow-none"
    //               value={result}
    //               onChange={(e) => setResult(e.target.value)}
    //             >
    //               <option value="10th">10</option>
    //               <option value="12th">12</option>
    //             </select>
    //           </label>
    //         </div>
    //       </div>
    //       <div className="mailingInfo  bg-warning p-5">
    //         <h2 className="text-start text-decoration-underline px-1 py-5">
    //           Postal Information
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </Sidebar1>
  );
};

export default StudentProfile;
