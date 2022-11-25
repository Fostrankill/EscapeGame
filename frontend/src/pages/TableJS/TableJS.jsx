import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image12 from "../../assets/Wild/Cours/TableJS.jpg";

function jsmania() {
  const [apple, setApple] = useState(false);
  return (
    <div className="back9">
      <textarea
        className="ok9"
        placeholder="Pseudo"
        defaultValue="De jeunes étudiants sont en pleine activité, quelque chose me dit que ce n'est pas normal !"
        id="textwc"
      />
      <Link className="tablestyle" to="/wild-hall">
        ❰
      </Link>
      <img id="imagejs" src={image12} alt="imagejs" />
      <button
        type="button"
        onClick={() => {
          setApple(true);
        }}
        id="applebutton"
      >
        {" "}
      </button>
      {apple ? (
        <textarea
          placeholder="Pseudo"
          defaultValue="APPLE = LOVE"
          id="appletext"
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default jsmania;
