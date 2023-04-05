import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../image/xe1.jpg";


function TypeCar() {
  return (
    <div className="card mt-4">
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          CARS <img src={image1} style={{height:'30px'}} alt="" />
        </li>
        <li className="list-group-item d-flex justify-content-between">
          RENTAL <img src={image1}   style={{height:'30px'}} alt="" />
        </li>
        <li className="list-group-item d-flex justify-content-between">
          BANKING <img src={image1}   style={{height:'30px'}} alt="" />
        </li>
        <li className="list-group-item d-flex justify-content-between">
          TRUCKS <img src={image1}  style={{height:'30px'}} alt="" />
        </li>
      </ul>
    </div>
  );
}
export default TypeCar;
