import "./style.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import image from "../../assets/Esca/DoorKey.jpg";
import passepartout from "../../assets/Autres/passpartout.png";

function DoorKey({ setGotKey, gotkey }) {
  return (
    <>
      <Link id="doorkeylink" to="/first-floor">
        {" "}
        ❮
      </Link>
      <img id="doorkeyimg" src={image} alt="doorkey" />
      <button
        type="button"
        onClick={() => {
          setGotKey(true);
        }}
        id="getkeybutton"
      >
        {" "}
      </button>
      {gotkey ? (
        <>
          <textarea
            placeholder="Pseudo"
            defaultValue="Bravo! Tu as trouvé la clé ! Retourne vite ouvrir la porte de la Wild
              Code School!"
            id="passpartmessage"
          />
          <img id="passpartoutimg" src={passepartout} alt="passe-partout" />
        </>
      ) : (
        <div>yo</div>
      )}
    </>
  );
}

DoorKey.propTypes = {
  setGotKey: PropTypes.func.isRequired,
  gotkey: PropTypes.number.isRequired,
};

export default DoorKey;
