import "./style.css";
import { Link } from "react-router-dom";
import image7 from "../../assets/Wild/DATA/Café/CafeCabinet.jpg";

function cafe() {
  return (
    <div className="back2">
      <textarea
        className="ok5"
        placeholder="Pseudo"
        value="Ahhh un bon café bien chaud ferait du bien, peux être qu'un indice se trouve ici ou peux être non :)"
      />
      <Link className="cafex" to="/data-corner">
        {" "}
        ❰
      </Link>
      <img src={image7} alt="cafecorner" />
    </div>
  );
}

export default cafe;
