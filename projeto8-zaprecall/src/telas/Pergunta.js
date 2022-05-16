export default function Pergunta ({setpergunta, idpergunta}){
    return (
        <div class="pergunta">
            <h3>Pergunta {idpergunta}</h3>
            <ion-icon name="play-outline" onClick={() => setpergunta(1)}></ion-icon>
        </div>
    );
}
