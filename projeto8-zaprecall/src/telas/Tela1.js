import Tela2 from "./Tela2";

/*function calltela2() {
    return (
        <Tela2 />
    );
}
*/

export default function Tela1({nTela, setTela1}) {
    return (
        <div className="telabase">
            <div>
                <img src="image/logo.png" />
                <h2>ZapRecall</h2>
                <h1 onClick={() => setTela1(!nTela)}>Iniciar Recall</h1>
            </div>
        </div>
    );
}