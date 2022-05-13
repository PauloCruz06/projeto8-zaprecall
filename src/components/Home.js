import "./assets/css/reset.css";
import "./assets/css/style.css";

import logo2 from "./assets/images/logo2.png";

export default function Home({setScreen}){
    return(
        <div className="home">
            <img className="img-logo" alt="Logo" src={logo2} />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen('START')}>Iniciar Recall!</button>
        </div>
    );
}