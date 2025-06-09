
export default function Inputs(onInput){
    return(
        <div>
            <input type="number" id="Peso" placeholder="Insira seu peso"></input>
            <input type="number" id="Altura" placeholder="Insira seu peso"></input>

            <button onClick={onInput} id="Botao">Calcular IMC</button>
        </div>
    )
}