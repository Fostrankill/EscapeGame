import "./style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import QuestContext from "../../contexts/QuestObject";
import image from "../../assets/Esca/DoorKey.jpg";
import passepartout from "../../assets/Autres/passpartout.png";

function DoorKey() {
  const { gotKey, setGotKey } = useContext(QuestContext);
  return (
    <div className="door-key">
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
      {gotKey ? (
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
        <div />
      )}
    </div>
  );
}

export default DoorKey;
