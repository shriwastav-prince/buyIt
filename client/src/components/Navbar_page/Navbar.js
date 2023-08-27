import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import About from './components/AboutUs/About.js';
import '../Navbar_page/nav_bar.css'
import nav_logo from '../Navbar_page/buyIt_logo.png'
// import Category from '../Categories/category'

export default function Navbar() {
  const navigate = useNavigate()
  const goToLogin = ()=>{
    navigate('/login')
  }
  const goToSignup = ()=>{
    navigate('/signup')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <img src={nav_logo} alt="" width='70' height='70' />
          <Link className="navbar-brand h1" href="#" width='80' height='80'>buyIt</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                {/* <Link to={Contact}>About</Link> */}
                <Link className="nav-link" to={'/about'}>About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contact'}>Contact us</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-primary mx-2 my-2" type="submit" onClick={goToLogin}>Log In</button>
            <button className="btn btn-primary" type="submit" onClick={goToSignup}>Sign up</button>
          </div>
        </div>
      </nav>

      {/* Categories
        <Category /> */}

      

    </>
  )
}
