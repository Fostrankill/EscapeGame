import "./style.css";
import { Link } from "react-router-dom";
import image11 from "../../../assets/Cours/monster.jpg";
import QuestContext from "../../../contexts/QuestObject";
import { useContext, useState } from "react";

function Monster() {

    const { gotMonster, setGotMonster } = useContext(QuestContext);






    return (
        <div className="back7">

            <Link className="gobax" to="/backyard">
                {" "}
                ❰
            </Link>

            <button
                type="button"
                onClick={() => {
                    setGotMonster(true);
                }}
                id="getkeybutton2"
            >
                {" "}
            </button>
            {gotMonster ? (
                <>
                    <textarea
                        placeholder="Pseudo"
                        defaultValue="useEffect permet d'effectuer des effets : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée. Le hook useEffect est appelé après chaque rendu de votre composant"

                        id="monstermess"
                    />

                </>
            ) : (
                <div>yo</div> // ?
            )}

            <img src={image11} alt="backyard" />
        </div>
    );
}

export default Monster;
