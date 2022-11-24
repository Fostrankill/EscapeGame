import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Wild/DATA/DataCorner.jpg";

function DataCorner() {
  return (
    <div className="BackgroundColor">
      <textarea id="textData" value="Dans le frigo ?" />
      <Link id="fridgeButton" to="/fridge-close">
        {" "}
        ▦{" "}
      </Link>
      <Link to="/wild-hall"> ❰</Link>
      <img src={image} alt="WildHall" />
    </div>
  );
}

export default DataCorner;
