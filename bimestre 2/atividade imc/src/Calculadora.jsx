import { useState } from "react"
import './Calculadora.css'

export default function CalcularImc(){
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [categoria, setCategoria] = useState("");
    
    
    function IMC(){
        
        const lista = ["Baixo", "Normal", "Acima do normal", "Obesidade 1", "Obesidade 2", "Obesidade 3"];
        let imcCalculado = peso/(altura*altura)
        setImc(imcCalculado);

        if(imc < 18.5){
            setCategoria(lista[0]);
        } else if(imc >= 18.5 && imc <= 24.9){
            setCategoria(lista[1]);
        } else if(imc >= 25.0 && imc <= 29.9){
            setCategoria(lista[2]);
        } else if(imc >= 30.0 && imc <= 34.9){
            setCategoria(lista[3]);
        } else if(imc >= 35.0 && imc <= 39.9){
            setCategoria(lista[4]);
        } else{
            setCategoria(lista[5]);
        }
    }
    return(
        <div className="parent">
            <div className="inputs">
                <input type="number" id="Peso" onChange={(e)=>setPeso(e.target.value)} placeholder="Insira seu peso"></input>
                <input type="number" id="Altura" onChange={(e)=>setAltura(e.target.value)} placeholder="Insira sua altura"></input>

                <button onClick={IMC} id="Botao">Calcular IMC</button>
            </div>
            <div className="Respostas">
                <h3>Seu IMC é: </h3>
                <p>{imc.toFixed(1)}</p>
                <h3>Categoria:</h3>
                <p>{categoria}</p>
            </div>
        </div>

    )
}