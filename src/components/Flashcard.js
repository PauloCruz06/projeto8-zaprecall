import React from "react";

import "./assets/css/reset.css"
import "./assets/css/style.css";

import arrow from "./assets/images/setinha.png";

export default function Flashcard({id, question, answer, addIcon}){
    const [clicked, setClicked] = React.useState(true);
    const [imgclick, setImgclick] = React.useState(true);
    const [color, setColor] = React.useState("no color");

    function addColor(color){
        addIcon(color);
        if(color === "red"){
            setColor(color);
        }else if(color === "yellow"){
            setColor(color);
        }else if(color === "green"){
            setColor(color);
        }
    }

    if(color === "no color"){
        return(
            <div className="flashcard">
                {clicked ? (
                    <button className="card-back" onClick={() => setClicked(!clicked)}>
                        <p>Pergunta {id+1}</p><ion-icon name="play-outline"></ion-icon>
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
                                    <button className="button-red" onClick={() => addColor("red")}>Não lembrei</button>
                                    <button className="button-yellow" onClick={() => addColor("yellow")} >Quase não lembrei</button>
                                    <button className="button-green" onClick={() => addColor("green")} >Zap!</button>    
                                </div>
                            </>
                        )}
                    </button>
                )}
            </div>
        );
    } else if(color === "red"){;
        return (
            <>
                <div className="flashcard red">
                    <button className="card-back">
                        <p>Pergunta {id+1}</p>{<ion-icon name="close-circle"></ion-icon>}
                    </button>
                </div>
            </>
        );
    } else if(color === "yellow"){
        return (
            <>   
                <div className="flashcard yellow">
                    <button className="card-back">
                        <p>Pergunta {id+1}</p>{<ion-icon name="help-circle"></ion-icon>}
                    </button>
                </div>
            </>
        );
    } else if(color === "green"){
        return (
            <>
                <div className="flashcard green">
                    <button className="card-back">
                        <p>Pergunta {id+1}</p>{<ion-icon name="checkmark-circle"></ion-icon>}
                    </button>
                </div>
            </>
        );
    }
}