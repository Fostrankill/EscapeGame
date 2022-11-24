import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/Wild/WildDoor.jpg";

function WildDoor() {
  const [lockedDoor, setLockedDoor] = useState(true);
  return (
    <>
      <Link id="wilddoorbacklink" to="/mainhall">
        {" "}
        ❮
      </Link>
      <button
        type="button"
        onClick={() => {
          setLockedDoor(false);
        }}
        id="lockeddoorbutton"
      >
        {" "}
      </button>
      {/* <Link id="keyholewilddoor" to="/mainhall">
        {" "}
      </Link> */}
      <img id="wilddoorimg" src={image} alt="wilddoor" />
      {lockedDoor ? (
        <div />
      ) : (
        <textarea
          placeholder="Pseudo"
          value="La porte est fermée à clé..."
          id="lockeddoormsg"
        />
      )}
    </>
  );
}

export default WildDoor;
