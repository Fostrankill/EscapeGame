import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import doorCode from "../../assets/Entrée/DoorCode.jpg";
import "./style.css";

export default function DoorCode() {
  const [passWordInput, setPassWordInput] = useState("");
  const [passWordAttempt, setPassWordAttempt] = useState("");
  const [passWordCheck, setPassWordCheck] = useState(true);

  const handleClick = () => {
    setPassWordAttempt(passWordInput);
    if (passWordAttempt === "hello") {
      setPassWordCheck(true);
    } else {
      setPassWordCheck(false);
    }
  };
  return (
    <div className="door-code">
      <img src={doorCode} alt="door-code" />
      <input
        type="text"
        defaultValue={passWordInput}
        onChange={(evt) => setPassWordInput(evt.target.value)}
      />
      <button type="submit" onClick={() => setPassWordAttempt(handleClick)}>
        Enter
      </button>
      {passWordAttempt === "#141281" ? (
        <Navigate to="/main-hall" replace />
      ) : null}
      <textarea
        className={passWordCheck ? "right-pw" : "wrong-pw"}
        placeholder="Pseudo"
        defaultValue="Mauvais Code !"
      />
      <Link to="/building-door">❰</Link>
    </div>
  );
}
