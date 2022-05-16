export default function Pergunta ({setpergunta, idpergunta}){
    return (
        <div class="pergunta">
            <h3>Pergunta {idpergunta}</h3>
            <ion-icon name="play-outline" onClick={() => setpergunta(1)}></ion-icon>
        </div>
    );
}

/*
export default function Pergunta (props){
    return (
        <div class="pergunta">
            <h3>props.pergunta</h3>
            <ion-icon name="play-outline" ></ion-icon>
        </div>
    );
}
*/