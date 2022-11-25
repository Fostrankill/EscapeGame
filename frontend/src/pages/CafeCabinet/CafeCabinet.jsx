import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image7 from "../../assets/Wild/DATA/Café/CafeCabinet.jpg";

function cafe() {
  const [coffee, setCoffee] = useState(false);
  const [furniture, setFurniture] = useState(false);
  return (
    <div className="back2">
      <textarea
        className="ok5"
        placeholder="Pseudo"
        defaultValue="Ahhh un bon café bien chaud ferait du bien, peux être qu'un indice se trouve ici ou peux être non :)"
      />
      <Link className="cafex" to="/data-corner">
        {" "}
        ❰
      </Link>
      <img src={image7} alt="cafecorner" />
      <button
        type="button"
        onClick={() => {
          setCoffee(true);
        }}
        id="coffeeButton"
      >
        {" "}
      </button>
      {coffee ? (
        <textarea
          placeholder="Pseudo"
          defaultValue="Hmmm dommage pas le temps pour un café..."
          id="coffeeText"
        />
      ) : (
        <div />
      )}

      <button
        type="button"
        onClick={() => {
          setFurniture(true);
        }}
        id="FurnitureButton"
      >
        {" "}
      </button>
      {furniture ? (
        <textarea
          placeholder="Pseudo"
          defaultValue="Rien dans le placard aussi. Décidement je ne pensais pas que ça prendrait autant de temps..."
          id="FurnitureText"
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default cafe;
