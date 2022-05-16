/*export default function Pergunta ({pergunta1, setpergunta1}){
    return (
        <div class="pergunta">
            <h3>Pergunta 1</h3>
            <ion-icon name="play-outline" onClick={() => setpergunta1(!pergunta1)}></ion-icon>
        </div>
    );
}
*/

export default function Pergunta (props){
    return (
        <div class="pergunta">
            <h3>props.pergunta</h3>
            <ion-icon name="play-outline" ></ion-icon>
        </div>
    );
}