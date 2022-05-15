import "./assets/css/reset.css";
import "./assets/css/style.css";

import { rand } from "./Questions";

import { flashcards } from "./Objects";

export default function Restart({ setScreen }){

    function reset(){
        flashcards.sort(rand);
        setScreen('home');
    }

    return (
        <button className="restart" onClick={reset}>
            REINICIAR RECALL
        </button>
    );
}