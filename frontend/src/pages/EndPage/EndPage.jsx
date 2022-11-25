import "./style.css";
import { useNavigate } from "react-router-dom";
import EndImage from "@assets/home.jpg";
import FinalImage from "@assets/FinalImage.jpg";

export default function EndPage() {
  const HomeMenu = useNavigate();
  return (
    <>
      <h1 className="EndingTitle">Bravo !</h1>
      <textarea
        className="EndingText"
        placeholder="Pseudo"
        defaultValue="Félicitation ! Tu as réussi à retrouver ton passeport dans les temps ! Reste à savoir qui à bien pu mettre le passeport dans le micro-onde ?  Mais c'est un mystère pour un autre jour... Pour l'instant, tu vas finalement pouvoir partir en vacances pour sortir de ta cave et prendre un peu de vitamine D ☀️ !"
      />
      <img className="EndImage" src={EndImage} alt="end" />
      <img className="FinalImage" src={FinalImage} alt="FinalImage" />
      <button
        id="MenuButton"
        type="submit"
        onClick={() => {
          HomeMenu("/");
        }}
      >
        Menu
      </button>
    </>
  );
}
