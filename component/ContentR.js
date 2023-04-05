import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TypeCar from "./TypeCar";
import Cart from "./Cart";
import HotCar from "./HotCar";
function ContentR(){
   return (
      
     <div>
            <TypeCar></TypeCar>
          <Cart/>
          <HotCar/>
     </div>
   )
}
export default ContentR;