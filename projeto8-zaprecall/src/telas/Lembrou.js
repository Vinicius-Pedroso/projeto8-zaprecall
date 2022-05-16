export default function Lembrou(props) {
    return (
        <div class="pergunta">
            <h3 class="lembrou">Pergunta {props.idpergunta}</h3>
            <ion-icon name="checkmark-circle" class="lembrou"></ion-icon>
        </div>
    );
}