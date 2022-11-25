import "./style.css";

export default function Loose() {
  return (
    <div className="mainpic">
      <h1 className="losename">PERDU!</h1>
      <label htmlFor="user">
        <textarea
          className="textloose"
          placeholder="Pseudo"
          defaultValue="Et non, pas de vacances pour toi! Tu vas devoir rester à la Wild Code School et coder du React plutôt qu'aller bronzer! 🤷‍♂️"
        />
      </label>
    </div>
  );
}
