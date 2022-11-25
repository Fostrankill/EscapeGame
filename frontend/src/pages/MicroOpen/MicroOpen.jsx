import { useState } from "react";
import { useNavigate } from "react-router-dom";
import microOpen from "../../assets/Wild/DATA/Micro-onde/MicroOpen.jpg";
import "./style.css";

export default function MicroOpen() {
  const [gotPassport, setGotPassport] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="micro-open">
      <img src={microOpen} alt="micro-open" />
      <textarea
        placeholder="Pseudo"
        defaultValue="Le voila enfin ! Qui est le dingue qui à mis mon %*!# de passport dans le %*!# de micro-onde "
      />
      <button
        type="button"
        onClick={() => setGotPassport(true)}
        id="btn-passport"
      >
        {" "}
      </button>
      {/* <div className="hover-passport" /> */}
      {gotPassport ? navigate("/end-page") : null}
    </div>
  );
}
