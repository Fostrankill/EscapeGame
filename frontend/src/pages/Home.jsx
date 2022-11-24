import { useNavigate } from "react-router";
import "./style.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="mainpic">
      <h1 className="titlename">Where is my %*!# PASSPORT ?</h1>
      <label htmlFor="user">
        <textarea
          className="ok3"
          placeholder="Pseudo"
          value="Il est temps de se dépêcher !
           Votre départ en vacances est prévu pour cette après-midi et impossible de mettre la main sur ce damné passeport...
            Un message mystérieux vous indique sa présence sur votre lieu de formation, dépêchez vous l'heure tourne et votre avion de nous attendra pas ! "
        />
      </label>
      <Link to="/building-door">
        <button type="submit">Jouer</button>
      </Link>
      <button
        id="playbutton"
        type="submit"
        onClick={() => {
          navigate("/building-door");
        }}
      >
        Jouer
      </button>
    </div>
  );
}
