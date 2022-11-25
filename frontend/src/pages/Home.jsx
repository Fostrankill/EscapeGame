import { useNavigate } from "react-router";
import "./style.css";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="mainpic">
      <h1 className="titlename">Where is my %*!# PASSPORT ?</h1>
      <label htmlFor="user">
        <textarea
          className="ok3"
          placeholder="Pseudo"
          defaultValue="Il est temps de se dépêcher !
           Votre départ en vacances est prévu pour cette après-midi et impossible de mettre la main sur ce damné passeport...
            Un message mystérieux vous indique sa présence sur votre lieu de formation, et votre taxi arrive dans 10 minutes pour vous amener à l'aéroport! 😱 L'heure tourne et votre avion ne vous attendra pas ! "
        />
      </label>

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
