import { useState } from "react";
import Lembrou from "./Lembrou"
import NaoLembrou from "./NaoLembrou"
import QuaseLembrou from "./QuaseLembrou"
import Pergunta from "./Pergunta";
import CardPergunta from "./CardPergunta";
import CardResposta from "./CardResposta";

//Eu sei que ta horrível essa parte de declarar tudo 20 vezes. Eu ia fazer um algorítmo que cria eles de forma dinâmica
//para cada pergunta, mas não sobrou tempo. Foi mal, ficou essa aberração

export default function Tela2() {
  const [pergunta1, setpergunta1]= useState(0);
  const [pergunta2, setpergunta2]= useState(0);
  const [pergunta3, setpergunta3]= useState(0);
  const [pergunta4, setpergunta4]= useState(0);
  const [pergunta5, setpergunta5]= useState(0);
  const [pergunta6, setpergunta6]= useState(0);
  const [pergunta7, setpergunta7]= useState(0);
  const [pergunta8, setpergunta8]= useState(0);
  const [contador, setcontador]= useState(0);

  return (

    <div className="baserecall">
      <div className="logorecall">
        <img src="image/logo-pequeno.png" />
        <h2>ZapRecall</h2>
      </div>
      <div className="perguntas">
        <div className="center">
          {pergunta1==0 && <Pergunta setpergunta={setpergunta1} idpergunta={1} />}
          {pergunta1==1 && <CardPergunta setpergunta={setpergunta1} perguntacard="Como chamar função no react?" />}
          {pergunta1==2 && <CardResposta setpergunta={setpergunta1} setcontador={setcontador} respostacard="Da mesma forma que no java, mas com camelCase" />}
          {pergunta1==3 && <Lembrou idpergunta="1"/>}
          {pergunta1==4 && <QuaseLembrou idpergunta="1"/>}
          {pergunta1==5 && <NaoLembrou idpergunta="1"/>}
        </div>
        <div className="center">
          {pergunta2==0 && <Pergunta setpergunta={setpergunta2} idpergunta={2} />}
          {pergunta2==1 && <CardPergunta setpergunta={setpergunta2} perguntacard="Como utilizar uma função filho em uma função pai?" />}
          {pergunta2==2 && <CardResposta setpergunta={setpergunta2} setcontador={setcontador} respostacard="Declarar a filho com export default e importar na pai com import nome_função_filho from endereço" />}
          {pergunta2==3 && <Lembrou idpergunta="2"/>}
          {pergunta2==4 && <QuaseLembrou idpergunta="2"/>}
          {pergunta2==5 && <NaoLembrou idpergunta="2"/>}
        </div><div className="center">
          {pergunta3==0 && <Pergunta setpergunta={setpergunta3} idpergunta={3} />}
          {pergunta3==1 && <CardPergunta setpergunta={setpergunta3} perguntacard="Quando você tem que atualizar uma constante do tipo useState?" />}
          {pergunta3==2 && <CardResposta setpergunta={setpergunta3} setcontador={setcontador} respostacard="Nunca, ela atualiza automaticamente na iteração do código" />}
          {pergunta3==3 && <Lembrou idpergunta="3"/>}
          {pergunta3==4 && <QuaseLembrou idpergunta="3"/>}
          {pergunta3==5 && <NaoLembrou idpergunta="3"/>}
        </div><div className="center">
          {pergunta4==0 && <Pergunta setpergunta={setpergunta4} idpergunta={4} />}
          {pergunta4==1 && <CardPergunta setpergunta={setpergunta4} perguntacard="Alem de declarar a variável useState, o que mais é necessário para usar ela?" />}
          {pergunta4==2 && <CardResposta setpergunta={setpergunta4} setcontador={setcontador} respostacard="Importar ela do react" />}
          {pergunta4==3 && <Lembrou idpergunta="4"/>}
          {pergunta4==4 && <QuaseLembrou idpergunta="4"/>}
          {pergunta4==5 && <NaoLembrou idpergunta="4"/>}
        </div><div className="center">
          {pergunta5==0 && <Pergunta setpergunta={setpergunta5} idpergunta={5} />}
          {pergunta5==1 && <CardPergunta setpergunta={setpergunta5} perguntacard="Porque muitos projetos de react só tem uma div com a classe .root na parte do html?" />}
          {pergunta5==2 && <CardResposta setpergunta={setpergunta5} setcontador={setcontador} respostacard="Porque a classe .root localiza onde o react irá construir o código e o resto do código será jornecido pelo js" />}
          {pergunta5==3 && <Lembrou idpergunta="5"/>}
          {pergunta5==4 && <QuaseLembrou idpergunta="5"/>}
          {pergunta5==5 && <NaoLembrou idpergunta="5"/>}
        </div><div className="center">
          {pergunta6==0 && <Pergunta setpergunta={setpergunta6} idpergunta={6} />}
          {pergunta6==1 && <CardPergunta setpergunta={setpergunta6} perguntacard="Como chamar função no react?" />}
          {pergunta6==2 && <CardResposta setpergunta={setpergunta6} setcontador={setcontador} respostacard="Da mesma forma que no java, mas com camelCase" />}
          {pergunta6==3 && <Lembrou idpergunta="6"/>}
          {pergunta6==4 && <QuaseLembrou idpergunta="6"/>}
          {pergunta6==5 && <NaoLembrou idpergunta="6"/>}
        </div><div className="center">
          {pergunta7==0 && <Pergunta setpergunta={setpergunta7} idpergunta={7} />}
          {pergunta7==1 && <CardPergunta setpergunta={setpergunta7} perguntacard="Qual o uso do props?" />}
          {pergunta7==2 && <CardResposta setpergunta={setpergunta7} setcontador={setcontador} respostacard="Passar informações de um componente para outro" />}
          {pergunta7==3 && <Lembrou idpergunta="7"/>}
          {pergunta7==4 && <QuaseLembrou idpergunta="7"/>}
          {pergunta7==5 && <NaoLembrou idpergunta="7"/>}
        </div><div className="center">
          {pergunta8==0 && <Pergunta setpergunta={setpergunta8} idpergunta={8} />}
          {pergunta8==1 && <CardPergunta setpergunta={setpergunta8} perguntacard="O que acontece se você chamar props por outro nome?" />}
          {pergunta8==2 && <CardResposta setpergunta={setpergunta8} setcontador={setcontador} respostacard="O código funciona normalmente. Props é uma convensão e pode ter outros nomes" />}
          {pergunta8==3 && <Lembrou idpergunta="8"/>}
          {pergunta8==4 && <QuaseLembrou idpergunta="8"/>}
          {pergunta8==5 && <NaoLembrou idpergunta="8"/>}
        </div>
      </div>
      <div className="caixaajuste">
      </div>
      <div className="conclusao">
        <div>
          <h4>Concluido {contador}/8</h4>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
//Meu deus, ficou muito feio
