export default function Home({setScreen}){
    return(
        <div className="home">
            <img className="img-home" alt="Logo" src="./images/logo2.png" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen('START')}>Iniciar Recall!</button>
        </div>
    );
}