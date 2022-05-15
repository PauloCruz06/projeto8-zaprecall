import React from "react";

import Home from "./Home";
import Questions from "./Questions";

export default function App(){
    const[screen, setScreen] = React.useState('home');

    return(
        <>
            {screen === 'home' ? <Home setScreen={setScreen} /> : <Questions setScreen={setScreen}/>}
        </>
    );
}