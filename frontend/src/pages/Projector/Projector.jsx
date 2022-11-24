import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/Wild/Projo/Projector.jpg";

function Projector() {
  const [phoneGirl, setPhoneGirl] = useState(false);
  return (
    <>
      <Link id="projectorbacklink" to="/wild-hall">
        {" "}
        ❮
      </Link>
      <button
        type="button"
        onClick={() => {
          setPhoneGirl(true);
        }}
        id="phonegirlbutton"
      >
        {" "}
      </button>
      {/* <Link id="keyholewilddoor" to="/mainhall">
        {" "}
      </Link> */}
      <img id="projectorimg" src={image} alt="projector" />
      {phoneGirl ? (
        <textarea
          placeholder="Pseudo"
          defaultValue="Ton passeport? Tu vois pas que je suis au téléphone?!? 😠😠"
          id="textgirl"
        />
      ) : (
        <div />
      )}
    </>
  );
}

export default Projector;
