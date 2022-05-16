export default function CardPergunta ({setpergunta, perguntacard}){
    return (
        <div class="perguntaver">
            <div class="boxpergunta">
              <h4>{perguntacard}</h4>
            </div>
            <div class="boxicon" onClick={() => setpergunta(2)}>
              <img src="/image/setinha.png"/>
            </div>
        </div>
    );
}