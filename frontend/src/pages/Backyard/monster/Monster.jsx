import "./style.css";
import { Link } from "react-router-dom";
import image11 from "../../../assets/Cours/monster.jpg";

function Monster() {
  return (
    <div className="back7">
      <textarea
        className="ok7"
        placeholder="Pseudo"
        value="useEffect permet d'effectuer des effets : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée. Le hook useEffect est appelé après chaque rendu de votre composant"
      />
      <Link className="gobax" to="/backyard">
        {" "}
        ❰
      </Link>

      <img src={image11} alt="backyard" />
    </div>
  );
}

export default Monster;
