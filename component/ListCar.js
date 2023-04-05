import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../image/xe1.jpg";
import image2 from "../image/xe2.jpg";
import image3 from "../image/xe3.jpg";
import "../App.css";

function ListCar() {
  return (
    <div className="col-12 ">
      <div className="col-12 mt-2   " id="headlist">
        NEW PRODUCTS FOR JULY{" "}
      </div>
      <div className="col-12 d-lg-flex mt-2">
        <div className="card col-lg-4">
          <img
            src={image1}
            className="card-img-top"
            alt="..."
            style={{ height: "150px" }}
          />
          <div className="card-body">
            <a href="/" style={{ color: "orange" }}>
              Click for buy
            </a>
          </div>
        </div>
        <div className="card col-lg-4">
          <img
            src={image2}
            className="card-img-top"
            style={{ height: "150px" }}
            alt="..."
          />
          <div className="card-body">
            <a href="/" style={{ color: "orange" }}>
              Click for buy
            </a>
          </div>
        </div>
        <div className="card col-lg-4">
          <img
            src={image3}
            className="card-img-top"
            style={{ height: "150px" }}
            alt="..."
          />
          <div className="card-body">
            <a href="/" style={{ color: "orange" }}>
              Click for buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListCar;
