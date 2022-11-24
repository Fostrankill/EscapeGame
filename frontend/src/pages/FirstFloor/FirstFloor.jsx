import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Esca/FirstFloor.jpg";

function FirstFloor() {
  return (
    <>
      <Link id="firstfloorlink" to="/door-key">
        {" "}
      </Link>
      <img id="firstfloorimg" src={image} alt="firstfloorwild" />
      <Link id="fflinkback" to="/mainhall">
        {" "}
        ❮
      </Link>
    </>
  );
}

export default FirstFloor;
