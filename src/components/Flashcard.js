import React from "react";

import "./assets/css/reset.css"
import "./assets/css/style.css";

import arrow from "./assets/images/setinha.png";

export default function Flashcard({id, question, answer}){
    const [clicked, setClicked] = React.useState(true);
    const [imgclick, setImgclick] = React.useState(true);
    const [color, setColor] = React.useState("no color");

    if(color === "no color"){
        return(
            <div className="flashcard">
                {clicked ? (
                    <button className="card-back" onClick={() => setClicked(!clicked)}>
                        <p>Pergunta {id}</p><ion-icon name="play-outline"></ion-icon>
                    </button>
                ) : (
                    <button className="card-front">
                        {imgclick ? (
                            <>
                                <p>{question}</p>
                                <img onClick={() => setImgclick(!imgclick)} alt="arrow" src={arrow} />
                            </>
                        ) : (
                            <>
                                <p>{answer}</p>
                                <div className="options">
                                    <button className="red" onClick={() => setColor("red")}>Não lembrei</button>
                                    <button className="yellow" onClick={() => setColor("yellow")} >Quase não lembrei</button>
                                    <button className="green" onClick={() => setColor("green")} >Zap!</button>    
                                </div>
                            </>
                        )}
                    </button>
                )}
            </div>
        );
    } else{
        return (
            <div className={`flashcard ${color}`}>
                <button className="card-back">
                    <p>Pergunta {id}</p><ion-icon name="play-outline"></ion-icon>
                </button>
            </div>
        );
    }
}