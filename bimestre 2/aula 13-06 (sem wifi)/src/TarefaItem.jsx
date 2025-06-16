

export default function TarefaItem( {tarefa, onToggleConcluir, onRemoverTarefa}){
    return(
        <li>
            <span style={{textDecoration: tarefa.concluida ? 'line-through' : 'none'}}>
                {tarefa.descricao}
            </span>
            <button onClick={() => }></button>
        </li>
    )
}