import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import doorCode from "../../assets/Entrée/DoorCode.jpg";
import "./style.css";

export default function DoorCode() {
  const [passWordInput, setPassWordInput] = useState("");
  const [passWordAttempt, setPassWordAttempt] = useState("");
  return (
    <div className="door-code">
      <img src={doorCode} alt="door-code" />
      <input
        type="text"
        defaultValue={passWordInput}
        onChange={(evt) => setPassWordInput(evt.target.value)}
      />
      <button type="submit" onClick={() => setPassWordAttempt(passWordInput)}>
        Enter
      </button>
      {passWordAttempt === "#141281" ? (
        <Navigate to="/main-hall" replace />
      ) : null}
      <Link to="/building-door">❰</Link>
    </div>
  );
}
