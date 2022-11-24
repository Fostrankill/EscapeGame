import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/WC/WC.jpg";

function Wc() {
  return (
    <div className="back">
      <textarea
        className="ok4"
        placeholder="Pseudo"
        value="Une odeur inhabituelle émane de cet endroit, au moins mon passeport ne prend pas l'eau..."
      />
      <Link to="/wild-hall"> ↓</Link>
      <img src={image} alt="entrancewild" />
    </div>
  );
}

export default Wc;
