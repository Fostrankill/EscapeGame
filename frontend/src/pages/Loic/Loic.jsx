import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuestContext from "../../contexts/QuestObject";
import LoicImg from "../../assets/Wild/Loic.jpg";
import "./style.css";

export default function Loic() {
  const { gotMonster } = useContext(QuestContext);
  const [textAreaRender, setTextAreaRender] = useState(false);
  const navigate = useNavigate();

  const checkMonster = () =>
    gotMonster ? navigate("/loic-monster") : setTextAreaRender(true);

  return (
    <div className="loic">
      <img src={LoicImg} alt="loic" />
      <Link to="/main-hall">❰</Link>
      <button type="submit" onClick={checkMonster}>
        J'ai ce qu'il te faut !
      </button>
      <textarea
        placeholder="Pseudo"
        value="Jamais tu ne seras accepté au Valhalla"
        className={textAreaRender ? "no-valhalla" : "valhalla"}
      />
    </div>
  );
}
