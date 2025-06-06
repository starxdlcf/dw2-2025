import Botoes from "./botoes";
import './Contador.css'
import { useState } from "react";

export default function Contador(){
    const [contador, setContador] = useState(0);
    const Incrementar = () => setContador(contador+1);
    const Decrementar = () => setContador(contador-1);
    return(
        <div className="contador">
            <h2>Contador</h2>
            <div>
                {contador}
            </div>
            <Botoes onIncrement = {Incrementar} onDecrement = {Decrementar}/>
        </div>
    )
}