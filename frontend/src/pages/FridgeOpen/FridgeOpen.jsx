import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Wild/DATA/Frigo/FridgeOpen.jpg";

function FridgeOpen() {
  return (
    <div className="fridge-open">
      <textarea
        id="textFridgeOpen"
        value="Pas Possible! Il faudrait vraiment être tordu pour mettre un passeport à cet endroit !"
      />
      <Link to="/fridge-close"> ❰</Link>
      <img src={image} alt="FridgeOpen" />
    </div>
  );
}

export default FridgeOpen;
