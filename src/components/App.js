import React from "react";

import Home from "./Home";
import Questions from "./Questions";

export default function App(){
    const[screen, setScreen] = React.useState('home');
    const[meta, setMeta] = React.useState(1);

    return(
        <>
            {screen === 'home' ? <Home setScreen={setScreen} setMeta={setMeta} /> : <Questions setScreen={setScreen} meta={meta} />}
        </>
    );
}