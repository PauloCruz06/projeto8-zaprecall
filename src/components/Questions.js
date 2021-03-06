import React from "react";

import "./assets/css/reset.css";
import "./assets/css/style.css";

import logo2 from "./assets/images/logo2.png";

import Flashcard from "./Flashcard";
import Finished from "./Finished";
import Footer from "./Footer";
import Restart from "./Restart";

import { flashcards } from "./Objects";

flashcards.sort(rand);

export function rand(){
    return Math.random()-0.5;
}

export default function Questions({ setScreen, meta }){
    const [icons, setIcons] = React.useState([]);

    function addIcon (color){
        if(color === "red"){
            const newIcon = [ ...icons, "close-circle"];
            setIcons(newIcon);
        }else if(color === "yellow"){
            const newIcon = [...icons, "help-circle"];
            setIcons(newIcon);
        }else if(color === "green"){
            const newIcon = [...icons, "checkmark-circle"];
            setIcons(newIcon);
        } 
    }

    return(
        <>
            <div className="questions">
                <div className="logo">
                    <img className="img-logo" alt="Logo" src={logo2} />
                    <h1>ZapRecall</h1>
                </div>
                {flashcards.map((flashcard, index) =>(
                    <Flashcard id={index} question={flashcard.question} answer={flashcard.answer} addIcon={addIcon} />
                ))}
            </div>
            <Footer>
                    {icons.length === flashcards.length ? <Finished icons={icons} meta={meta} /> : <></>}
                    <p>{icons.length}/{flashcards.length} CONCLUÍDOS</p>
                    <div className="icons">
                        {icons.map((icon) => (
                            <ion-icon name={icon}></ion-icon>
                        ))}
                    </div>
                    {icons.length === flashcards.length ? <Restart setScreen={setScreen} /> : <></>}
            </Footer>
        </>
    );
}
