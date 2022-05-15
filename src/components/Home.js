import React from "react";

import "./assets/css/reset.css";
import "./assets/css/style.css";

import logo2 from "./assets/images/logo2.png";

import { flashcards } from "./Objects";

export default function Home({ setScreen, setMeta }){
    const [stt, setStt] = React.useState(false);
    const [value, setValue] = React.useState("");

    function validMeta(value){
        if(value === ""){
            setValue(value);
            setStt(false);
        }
        if(!isNaN(Number(value))){
            if(Number(value) >= 1 && Number(value) <= flashcards.length){
                setValue(value);
                setMeta(Number(value));
                setStt(true);
            }else{
                setValue(value);
                setStt(false);
            }
        }else {
            setValue(value);
            setStt(false);
        }   
    }

    return(
        <div className="home">
            <img className="img-logo" alt="Logo" src={logo2} />
            <h1>ZapRecall</h1>
            <input type="text" placeholder="Digite a sua meta de zaps..." value={value} onChange={(event) => validMeta(event.target.value)} />
            { stt ? <button onClick={() => setScreen('START')}>Iniciar Recall!</button> : <button className="blocked">Iniciar Recall!</button>}
        </div>
    );
}