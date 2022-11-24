import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Entrée/BuildingDoor.jpg";

function BuildingDoor() {
  return (
    <>
      <Link to="/door-code"> ❰</Link>
      <img src={image} alt="entrancewild" />
    </>
  );
}

export default BuildingDoor;
