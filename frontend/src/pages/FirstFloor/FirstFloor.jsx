import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Esca/FirstFloor.jpg";

function FirstFloor() {
  return (
    <div className="first-floor">
      <Link id="firstfloorlink" to="/door-key">
        {" "}
      </Link>
      <img id="firstfloorimg" src={image} alt="firstfloorwild" />
      <Link id="fflinkback" to="/main-hall">
        {" "}
        ❮
      </Link>
    </div>
  );
}

export default FirstFloor;
