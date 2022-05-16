export default function QuaseLembrou(props) {
    return (
        <div class="pergunta">
            <h3 class="quase">{props.numeropergunta}</h3>
            <ion-icon name="help-circle" class="quase"></ion-icon>
        </div>
    );
}