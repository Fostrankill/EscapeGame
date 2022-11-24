import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import image from "../../assets/Wild/WildDoor.jpg";

function WildDoor({ gotkey }) {
  const [lockedDoor, setLockedDoor] = useState(true);
  const navigate = useNavigate();
  const secondternary = lockedDoor ? (
    <div />
  ) : (
    <textarea
      placeholder="Pseudo"
      defaultValue="La porte est fermée à clé..."
      id="lockeddoormsg"
    />
  );
  return (
    <>
      <Link id="wilddoorbacklink" to="/main-hall">
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
      {gotkey ? navigate("/wild-hall") : secondternary}
    </>
  );
}

WildDoor.propTypes = {
  gotkey: PropTypes.number.isRequired,
};

export default WildDoor;
