import './Botoes.css'

export default function botoes({onIncrement, onDecrement}){
    return(
        <div>
            <button onClick={onIncrement} className='Incremento' >+</button>
            <button onClick={onDecrement} className='Decremento' >-</button>
        </div>
    )
}