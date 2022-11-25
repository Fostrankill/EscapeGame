import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Wild/DATA/Micro-onde/MicroClose.jpg";

function MicroClose() {
  return (
    <div className="micro-close">
      <textarea id="textMicroClose" value="Dans le micronde ? Serieux ?" />
      <Link id="microButton" to="/micro-open">
        {" "}
        ▦{" "}
      </Link>
      <Link to="/data-corner" id="back-btn-fClose">
        {" "}
        ❰
      </Link>
      <img src={image} alt="MicroClose" />
    </div>
  );
}

export default MicroClose;
