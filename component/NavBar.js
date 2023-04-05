import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-danger navbar-dark mt-3 p-0 ">

          <ul className="navbar-nav nav-tabs w-100 mx-3" role="tablist">
            <li className="nav-item  " style={{width:'200px',textAlign:'center'}}>
            <a className="nav-link  active text-dark rounded-0    " role="presentation" href="/">
                Home
              </a>
            </li>
            <li className="nav-item " style={{width:'200px',textAlign:'center'}}>
              <a className="nav-link  text-light rounded-0 " href="/">
                About
              </a>
            </li>
            <li className="nav-item" style={{width:'200px',textAlign:'center'}}>
              <a className="nav-link  text-light rounded-0" href="/">
                Specials
              </a>
            </li>
            <li className="nav-item" style={{width:'200px',textAlign:'center'}}>
              <a className="nav-link text-light rounded-0" href="/">
                New
              </a>
            </li>
            <li href=""
              style={{ alignItems: "center", display: "flex",width:'200px' ,height:"40px", justifyContent: "center"}}
              className="nav-item ">
            
                <Link
                  style={{ textDecoration: "none" }}
                  to="/contact"
                  className="text-light"
                >
                  Contact
                </Link>
             
            </li>
          </ul>
      </nav>
    </div>
  );
}
export default NavBar;
