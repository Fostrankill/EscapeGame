import "./style.css";
import { Link } from "react-router-dom";
import ImageHall from "../../assets/Hall/MainHall.jpg";

export default function MainHall() {
  return (
    <>
      <Link className="Wild" to="/wild-door">
        ❰
      </Link>
      <textarea
        className="TextWild"
        placeholder="Pseudo"
        value="Aller à la Wild ?"
      />

      <Link className="WC" to="/wc">
        ❰
      </Link>
      <textarea
        className="TextWC"
        placeholder="Pseudo"
        value="Aller aux WC ?"
      />

      <Link className="Backyard" to="/backyard">
        ❰
      </Link>
      <textarea
        className="TextBackyard"
        placeholder="Pseudo"
        value="Aller à la cours ?"
      />

      <Link className="FirstFloor" to="/first-floor">
        ❰
      </Link>
      <textarea
        className="TextFirstFloor"
        placeholder="Pseudo"
        value="Aller au premier étage ?"
      />

      <img className="ImageHall" src={ImageHall} alt="Hall" />
    </>
  );
}
