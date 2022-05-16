export default function NaoLembrou(props) {
    return (
        <div class="pergunta">
            <h3 class="erro">{props.numeropergunta}</h3>
            <ion-icon name="close-circle" class="erro"></ion-icon>
        </div>
    );
}