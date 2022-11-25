import { Link } from "react-router-dom";
import "./style.css";
import loicMonster from "../../assets/Wild/Loic.jpg";

export default function LoicMonster() {
  return (
    <div className="loic-monster">
      <img src={loicMonster} alt="loic-monster" />
      <textarea
        placeholder="Pseudo"
        defaultValue="Merci pour cette belle demonstration de useEffect"
      />
      <Link to="/wild-hall">❰</Link>
    </div>
  );
}
