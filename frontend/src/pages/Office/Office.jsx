import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/Wild/Bureau/Office.jpg";

function Office() {
  const [officemsg, setOfficemsg] = useState(false);
  return (
    <>
      <Link id="officebacklink" to="/wild-hall">
        {" "}
        ❮
      </Link>
      <button
        type="button"
        onClick={() => {
          setOfficemsg(true);
        }}
        id="officemsgbutton"
      >
        {" "}
      </button>
      {/* <Link id="keyholewilddoor" to="/mainhall">
        {" "}
      </Link> */}
      <img id="officeimg" src={image} alt="office" />
      {officemsg ? (
        <textarea
          placeholder="textbureau"
          defaultValue="Beaucoup de bazar mais pas de passeport en vue..."
          id="textoffice"
        />
      ) : (
        <div />
      )}
    </>
  );
}

export default Office;
