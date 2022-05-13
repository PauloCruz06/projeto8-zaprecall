import "./assets/css/reset.css";
import "./assets/css/style.css";

import logo2 from "./assets/images/logo2.png";

import Flashcard from "./Flashcard";

import { flashcards } from "./Objects";

export default function Questions(){
    return(
        <div className="questions">
            <div className="logo">
                <img className="img-logo" alt="Logo" src={logo2} />
                <h1>ZapRecall</h1>
            </div>
            {flashcards.map((flashcard, index) =>(
                <Flashcard id={index} question={flashcard.question} answer={flashcard.answer} />
            ))}
        </div>
    );
}
