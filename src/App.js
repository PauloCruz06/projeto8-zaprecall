import React from "react";

import Home from "./components/Home";
import Questions from "./components/Questions";

export default function App(){
    const[screen, setScreen] = React.useState('home');

    return(
        <>
            {screen === 'home' ? <Home setScreen={setScreen} /> : <Questions />}
        </>
    );
}