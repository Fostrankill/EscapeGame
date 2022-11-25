import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import QuestContext from "../../contexts/QuestObject";
import image from "../../assets/Wild/WildDoor.jpg";

function WildDoor() {
  const [lockedDoor, setLockedDoor] = useState(true);
  const navigate = useNavigate();
  const { gotKey } = useContext(QuestContext);
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
    <div className="wild-door">
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
      {gotKey ? navigate("/loic") : secondternary}
    </div>
  );
}

export default WildDoor;
