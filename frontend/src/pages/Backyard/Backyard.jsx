import "./style.css";
import { Link } from "react-router-dom";
import image11 from "../../assets/Cours/backyard.jpg";

function backya() {
  return (
    <div className="back3">
      <textarea
        className="ok6"
        placeholder="Pseudo"
        value="Ah la cour de promenade de la Wild Code School Supermax, il vaut mieux être sur ses gardes !"
      />
      <Link className="hallax" to="/main-hall">
        {" "}
        ❰
      </Link>
      <Link className="buttonx" to="/monster">
        {" "}
        ▦{" "}
      </Link>
      <img src={image11} alt="backyard" />
    </div>
  );
}

export default backya;
