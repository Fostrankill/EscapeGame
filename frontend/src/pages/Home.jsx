import "./style.css";

export default function Homepage() {
  return (
    <div className="mainpic">
      <h1 className="titlename">Where is my %*!# PASSPORT ?</h1>
      <label htmlFor="user">
        <textarea
          placeholder="Pseudo"
          value="Il est temps de se dépêcher !
           Votre départ en vacances est prévu pour cette après-midi et impossible de mettre la main sur ce damné passeport...
            Un message mystérieux vous indique sa présence sur votre lieu de formation, dépêchez vous l'heure tourne et votre avion de nous attendra pas ! "
        />
      </label>
      <button type="submit">Jouer</button>
    </div>
  );
}
