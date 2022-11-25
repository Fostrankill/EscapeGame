import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/Entrée/BuildingDoor.jpg";
import sound from "@assets/passport.wav";

function BuildingDoor() {
  const [firstdoor, setFirstDoor] = useState(false);
  return (
    <div className="building-door">
      <Link id="buildingdoorlink" to="/door-code">
        {" "}
      </Link>
      <img id="buildingdoorimg" src={image} alt="entrancewild" />

      <audio
        autoplay="true"
        src={sound}></audio>

      <button
        type="button"
        onClick={() => {
          setFirstDoor(true);
        }}
        id="firstdoorbutton"
      >
        {" "}
      </button>
      {firstdoor ? (
        <textarea
          placeholder="firstdoor"
          defaultValue="La porte ne s'ouvre pas..."
          id="firstdoortext"
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default BuildingDoor;
