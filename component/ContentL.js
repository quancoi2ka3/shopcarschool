import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide from "./Slide";

import ListCar from "./ListCar";



function ContentL() {
  return (
    <div className="container-fluid mt-4 p-0">
      <Slide></Slide>
      <ListCar></ListCar>
    </div>
  );
}
export default ContentL;
