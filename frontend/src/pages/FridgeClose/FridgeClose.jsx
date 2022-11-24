import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Wild/DATA/Frigo/FridgeClose.jpg";

function FridgeClose() {
  return (
    <div className="fridge-close">
      <textarea id="textFridge" value="Dans le frigo ?" />
      <Link id="button" to="/fridge-open">
        {" "}
        ▦{" "}
      </Link>
      <Link to="/data-corner" id="back-btn-fClose">
        {" "}
        ❰
      </Link>
      <img src={image} alt="FridgeClose" />
    </div>
  );
}

export default FridgeClose;
