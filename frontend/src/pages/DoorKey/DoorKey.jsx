import "./style.css";
import { Link } from "react-router-dom";
import image from "../../assets/Esca/DoorKey.jpg";
import passepartout from "../../assets/Autres/passpartout.png";

function DoorKey() {
  return (
    <>
      <Link id="doorkeylink" to="/first-floor">
        {" "}
        ❮
      </Link>
      <img id="doorkeyimg" src={image} alt="doorkey" />
      <img id="passpartoutimg" src={passepartout} alt="passe-partout" />
      <textarea
        placeholder="Pseudo"
        value="Bravo! Tu as trouvé la clé ! Retourne vite ouvrir la porte de la Wild
          Code School!"
        id="passpartmessage"
      />
    </>
  );
}

export default DoorKey;
