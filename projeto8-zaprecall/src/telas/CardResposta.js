export default function CardResposta(props){
    return (
        <div class="perguntaver">
            <div class="boxpergunta">
                <h4>{props.respostadocard}</h4>
            </div>
            <span class="opcaorecall">
                <div class="botao vermelho">
                    <h4>Não lembrei</h4>
                </div>
                <div class="botao amarelo">
                    <h4>Quase não lembrei</h4>
                </div>
                <div class="botao verde">
                    <h4>Zap</h4>
                </div>
            </span>
        </div > 
    );
}