import React from "react";

import "./assets/css/reset.css";
import "./assets/css/style.css";

import party from "./assets/images/party.png";
import sad from "./assets/images/sad.png";

export default function Finished({ icons, meta }){
    const newIcon = icons.filter((icon) => icon !== "close-circle");
    if(newIcon.length >= meta){
        return (
            <div className="finished" >
                <div className="result">
                    <img alt="party" src={party} />
                    <h1>Parabéns</h1>
                </div>
                <p>
                    {`
                        Você não esqueceu de 
                        nenhum flashcard!
                    `}
                </p>
            </div>
        );
    } else{
        return (
            <div className="finished">
                <div className="result">
                    <img alt="sad" src={sad} />
                    <h1>Putz...</h1>
                </div>
                <p>
                    {`
                        Ainda falta alguns...
                        Mas não desanime!
                    `}
                </p>
            </div>
        );
    }
}