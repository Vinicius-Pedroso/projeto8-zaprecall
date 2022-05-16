export default function CardResposta({ setpergunta, setcontador, respostacard }) {
    return (
        <div class="perguntaver">
            <div class="boxpergunta">
                <h4>{respostacard}</h4>
            </div>
            <span class="opcaorecall">
                <div class="botao vermelho" onClick={() => {
                    setpergunta(5)
                    setcontador(contador => contador++)
                    }
                }>
                    <h4>Não lembrei</h4>
                </div>
                <div class="botao amarelo" onClick={() => {
                    setpergunta(4)
                    setcontador(contador => contador++)
                    }
                }>
                    <h4>Quase não lembrei</h4>
                </div>
                <div class="botao verde" onClick={() => {
                    setpergunta(3)
                    setcontador(contador => contador++)
                    }
                }>
                    <h4>Zap</h4>
                </div>
            </span>
        </div >
    );
}