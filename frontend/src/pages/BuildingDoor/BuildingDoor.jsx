import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Entrée/BuildingDoor.jpg";

function BuildingDoor() {
  return (
    <>
      <Link id="buildingdoorlink" to="/door-code">
        {" "}
      </Link>
      <img id="buildingdoorimg" src={image} alt="entrancewild" />
    </>
  );
}

export default BuildingDoor;
