import Lembrou from "./Lembrou"
import NaoLembrou from "./NaoLembrou"
import QuaseLembrou from "./QuaseLembrou"
import Pergunta from "./Pergunta";
import CardPergunta from "./CardPergunta";
import CardResposta from "./CardResposta";
/* Tentativa de automatizar as perguntas

function imprimirpergunta (){
  let novapergunta ={};
  let perguntaimprimida = false;
  for (let i = 0; i < 8; i++){
    perguntaimprimida = false;
    for (let j = 0; j < 8; j++){
      if (questoesfeitas[i].numero === j){
        if(questoesfeitas[i].estado === "Lembrou"){
          return (
            <div className="center">
              <<Lembrou numeropergunta="Pergunta {i}"/>
            </div>
          );
          perguntaimprimida = true;
        }
        if(questoesfeitas[i].estado === "NaoLembrou"){
          return (
            <div className="center">
              <NaoLembrou numeropergunta="Pergunta {i}"/>
            </div>
          ); 
          perguntaimprimida = true;
        }
        if(questoesfeitas[i].estado === "QuaseLembrou"){
          return (
            <div className="center">
              <QuaseLembrou numeropergunta="Pergunta {i}"/>
            </div>
          ); 
          perguntaimprimida = true;
        }
      }
    }
    If (perguntaimprimida == false){
      return (
        <div className="center">
          <Pergunta numeropergunta="Pergunta 1"/>
        </div>
      );
    }
  }
}
const [tela1, setTela1]= useState(true);
    return (
        <div>
            {tela1  && <Tela1 nTela={tela1} setTela1={setTela1}/>}
            {!tela1 && <Tela2 nTela={tela1} setTela1={setTela1}/>}
        </div>
    );
    {pergunta1(0) && <Pergunta pergunta={pergunta1} setpergunta={setpergunta1} />}
          {pergunta1(1) && <CardPergunta pergunta={pergunta1} setpergunta={setpergunta1} perguntacard="Como chamar função no react?" />}
        
*/
export default function Tela2() {
  /*const [pergunta1, setpergunta1]= useState(0);
  const [pergunta2, setPergunta2]= useState(0);
  const [pergunta3, setPergunta3]= useState(0);
  const [pergunta4, setPergunta4]= useState(0);
  const [pergunta5, setPergunta5]= useState(0);
  const [pergunta6, setPergunta6]= useState(0);
  const [pergunta7, setPergunta7]= useState(0);
  const [pergunta8, setPergunta8]= useState(0);
  */
  
  return (
    <div className="baserecall">
      <div className="logorecall">
        <img src="image/logo-pequeno.png" />
        <h2>ZapRecall</h2>
      </div>
      <div className="perguntas">
        <div className="center">
          <Pergunta pergunta="Pergunta 1" />
        </div>
        <div className="center">
          <Pergunta pergunta="Pergunta 2" />
        </div>
        <div className="center">
          <Pergunta pergunta="Pergunta 3" />
        </div>
        <div className="center">
          <Lembrou numeropergunta="Pergunta 4" />
        </div>
        <div className="center">
          <NaoLembrou numeropergunta="Pergunta 5" />
        </div>
        <div className="center">
          <QuaseLembrou numeropergunta="Pergunta 6" />
        </div>
        <div className="center">
          <CardPergunta perguntadocard="Como chamar função no react?" />
        </div>
        <div className="center">
          <CardResposta respostadocard="To tentando descobrir" />
        </div>
      </div>
      <div className="caixaajuste">
      </div>
      <div className="conclusao">
        <div>
          <h4>Concluido x/8</h4>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
// x = questoesfeitas.length
