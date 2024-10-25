import "./navbar.css";
import React from 'react';
import logo from "../Components/Images/Hiring Mine Logo.png";


function NavBar() {
  return (
    <>
    <div>
      <div className="containerr">
        <a>
          <img className="pic" src={logo} alt="Logo" />
        </a>
        <div className='menu' >
          <a> About Us</a>
          <a>People</a>
          <a>Jobs</a>
          <a>Login</a>
          <a>Join Now</a>
          <a>Employee / Post Job</a>
        </div>

      </div>
      <Header />

    </div>
    </>
  )}

export default NavBar;


export function Header() {
      return (
            <div className='header'>
              <h1>
                Dig. Apply <br />
                Prepare Your Future
              </h1>
              <p>Hiring Mine connects employer and job seekers, where employers are the source of the <br />
                resources and the job seeker can find and apply for their targeted job.</p>
              <input></input>
            </div>
          )
        }
        
        