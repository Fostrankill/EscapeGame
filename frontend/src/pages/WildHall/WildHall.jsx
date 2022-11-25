import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageWildHall from "../../assets/Wild/WildHall.jpg";

export default function WildHall() {
  const [apple, setApple] = useState(false);
  return (
    <>
      <Link className="Table" to="/table-js">
        ❰
      </Link>
      <textarea
        className="TextTableJs"
        placeholder="Pseudo"
        defaultValue="Faire un tour chez les JS ?"
      />
      <Link className="Projector" to="/projector">
        ❰
      </Link>
      <textarea
        className="TextProjector"
        placeholder="Pseudo"
        defaultValue="Enquêter au projecteur ?"
      />
      <Link className="Office" to="/office">
        ❰
      </Link>
      <textarea
        className="TextOffice"
        placeholder="Pseudo"
        defaultValue="Inspecter le bureau ?"
      />
      <Link className="Data" to="/data-corner">
        ❰
      </Link>
      <textarea
        className="TextData"
        placeholder="Pseudo"
        defaultValue="Fouiller chez les Data ?"
      />
      <img className="ImageWildHall" src={ImageWildHall} alt="Hall" />
      {apple ? (
        <textarea
          placeholder="Pseudo"
          defaultValue="APPLE = LOVE"
          id="appletext"
        />
      ) : (
        <div />
      )}
      <button
        type="button"
        onClick={() => {
          setApple(true);
        }}
        id="applebutton"
      >
        {" "}
      </button>
    </>
  );
}
