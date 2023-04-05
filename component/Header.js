import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container-fluid p-0 d-flex    " style={{backgroundColor:" #e1dfde"}}>

         <div className="col-lg-8  d-flex">
           <h1 style={{margin:"0"}}>CARS</h1>
           <h3 className="text-warning d-flex align-items-center  m-0">ONLINE</h3>
         </div>
         <div className="col-lg-3 ">
          <div className="box-sizing input-group input-group-sm p-2 ">
         <input type="search" className="form-control" />
          <button className="btn btn-light border border-3  rounded-2 m-1 text-danger">Search</button>
             </div>
         </div>
     
    </div>
  );
}
export default Header;
