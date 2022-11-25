import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/Wild/DATA/DataCorner.jpg";

function DataCorner() {
  const [datatext, setDataText] = useState(false);
  return (
    <div className="data-corner">
      <Link id="fridgeButton" to="/fridge-close">
        {" "}
        ▦{" "}
      </Link>
      <Link id="microButton" to="/micro-wave">
        {" "}
        ▦{" "}
      </Link>
      <Link id="cafeButton" to="/cafe-cabinet">
        {" "}
        ▦{" "}
      </Link>
      <Link to="/wild-hall" className="back-button">
        {" "}
        ❰
      </Link>
      {datatext ? (
        <textarea
          placeholder="Pseudo"
          defaultValue="PYTHON = LOVE"
          id="datatextzone"
        />
      ) : (
        <div />
      )}
      <button
        type="button"
        onClick={() => {
          setDataText(true);
        }}
        id="datatextbutton"
      >
        {" "}
      </button>
      <img src={image} alt="WildHall" />
    </div>
  );
}

export default DataCorner;
