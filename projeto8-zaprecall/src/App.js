import { useState } from "react";
import Tela1 from "./telas/Tela1";
import Tela2 from "./telas/Tela2";

/* Incluir objetos com {
    numero = x
    estado = Lembrou/NaoLembrou/QuaseLembrou
}
*/
export default function App() {
    const [tela1, setTela1]= useState(true);
    return (
        <div>
            {tela1  && <Tela1 nTela={tela1} setTela1={setTela1}/>}
            {!tela1 && <Tela2 nTela={tela1} setTela1={setTela1}/>}
        </div>
    );
}