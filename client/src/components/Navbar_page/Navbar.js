import React from 'react'


import nav_logo from '../Navbar_page/buyIt_logo.png'

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={nav_logo} alt="nav-logo" width='70' height='70' />
                    <a className="navbar-brand" href="/">buyIt</a>
                    
                    <div className="collapse navbar-collapse mx" id="navbarSupportedContent">
                        
                        
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="flex">
                            <button className="btn btn-primary mx-2" >Log In</button>
                            <button className="btn btn-primary mx-1">Sign Up</button>
                            
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
