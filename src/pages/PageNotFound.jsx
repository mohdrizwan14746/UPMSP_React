import React from 'react'
import "../css/pageNotFound.css"
import NotFound from "../static/pageNotFound.jpg"

const PageNotFound = () => {
  return (
    <div className='main-container d-flex flex-column justify-content-center align-items-center '>
        <img className='img404' src={NotFound} alt='Page_Not_Found_Image'/>
        {/* <p className='code404'>404</p>
        <p className='text-center'>PageNotFound</p> */}
        
        </div>
  )
}

export default PageNotFound