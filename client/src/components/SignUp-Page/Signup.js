import React from 'react'
import logo from './lg.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
    
    <div className="container-fluid">
      <Link className="navbar-brand" to={'/'}>
      <img src={logo} alt="Logo" width="65" height="65" className="d-inline-block align-text-top"/>
      <h1 style={{margin:"-50px 68px"}}>buyIt</h1>
      </Link>
  </div>

  <div className="container" style={{marginTop: "90px"}}>
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-5">
        <div className="card shadow-lg" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <h1 className="mb-2">Sign up</h1>
            <p className=" mb-5">Create an Account for buyIt</p>

            <div className="form-outline mb-4">
              <input type="text" id="typeTextX-2" className="form-control form-control-lg" placeholder='Full Name'/>
        
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email'/>
        
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Password' />
            </div>

            {/* <!-- Checkbox --> */}
            
            {/* <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div> */}

            <button className="btn btn-primary btn-lg mx-5 px-5" type="submit">Signup</button>
            
            
          <p className='text-center my-5'>Already have an account? <Link to={'/login'}>Log In</Link></p>
          <p htmlFor=""><Link to={'/'}>Back to Home Page</Link></p>

          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    </>
  )
}
