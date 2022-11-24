import "./style.css";
import { Link } from "react-router-dom";
import image12 from "../../assets/Wild/Cours/TableJS.jpg";

function jsmania() {
  return (
    <div className="back9">
      <textarea
        className="ok9"
        placeholder="Pseudo"
        defaultValue="De jeunes étudiants sont en pleine activité, quelque chose me dis que ce n'est pas normal !"
        id="textwc"
      />
      <Link className="tablestyle" to="/wild-hall">
        {" "}
        ❰
      </Link>
      <img id="imagejs" src={image12} alt="imagejs" />
    </div>
  );
}

export default jsmania;
