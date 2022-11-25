import "./style.css";
import { Link } from "react-router-dom";
import ImageWildHall from "../../assets/Wild/WildHall.jpg";

export default function WildHall() {
  return (
    <>
      <Link className="Table" to="/table-js">
        ❰
      </Link>
      <textarea
        className="TextTableJs"
        placeholder="Pseudo"
        defaultValue="Un petit tour chez les JS ?"
      />
      <Link className="Projector" to="/projector">
        ❰
      </Link>
      <textarea
        className="TextProjector"
        placeholder="Pseudo"
        defaultValue="Enquetez au projecteur ?"
      />
      <Link className="Office" to="/office">
        ❰
      </Link>
      <textarea
        className="TextOffice"
        placeholder="Pseudo"
        defaultValue="Vérifier le bureau ?"
      />
      <Link className="Data" to="/data-corner">
        ❰
      </Link>
      <textarea
        className="TextData"
        placeholder="Pseudo"
        defaultValue="Inspecter les Data ?"
      />
      <img className="ImageWildHall" src={ImageWildHall} alt="Hall" />
    </>
  );
}
