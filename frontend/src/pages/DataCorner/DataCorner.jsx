import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Wild/DATA/DataCorner.jpg";

function DataCorner() {
  return (
    <div className="BackgroundColor">
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
      <Link to="/wild-hall"> ❰</Link>
      <img src={image} alt="WildHall" />
    </div>
  );
}

export default DataCorner;
