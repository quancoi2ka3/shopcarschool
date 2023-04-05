import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../image/xe1.jpg";
function HotCar() {
  return (
    <div className="container-fluid p-0 mt-3">
      <div
        className="container-fluid p-0 bg-danger d-flex align-items-center "
        style={{ height: "40px", color: "white" }}
      >
        <p className="mt-3 font-weight-bold"> BRANCHES</p>
      </div>
      <div className="container-fluid p-0 mt-3 card " style={{backgroundColor:"#dbdbdb"}}>
       <div className="col-lg-12 d-lg-flex">
           <div className="col-lg-6 d-flex">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
           <div className="col-lg-6 d-flex ">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
       </div>
       <div  className="col-lg-12 d-lg-flex">
           <div className="col-lg-6 d-flex">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
           <div className="col-lg-6 d-flex">
             <img  className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
       </div>
       <div className="col-lg-12 d-lg-flex">
           <div className="col-lg-6 d-flex">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
           <div className="col-lg-6 d-flex">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
       </div>
       <div className="col-lg-12 d-lg-flex">
           <div className="col-lg-6 d-flex">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
           <div className="col-lg-6 d-flex">
             <img className="img-thumbnail" style={{ height: "70px" }} src={image1} alt="" />
             <div style={{ backgroundColor: "#c0baba" }}></div>
           </div>
       </div>
      </div>
    </div>
  );
}

export default HotCar;
