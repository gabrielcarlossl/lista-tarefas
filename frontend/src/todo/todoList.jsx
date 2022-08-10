import React from "react";
import IconButton from "../template/iconButton";

export default props =>{
    
    const renderRows = ()=>{

        const list = props.list || [] //se a lista esta setada no props a lista entra na constante se não estiver ela vai para o array vazio

        return (
            //para que o react não reclame a que os elementos filhos do array tenham uma chave unica coloca o todo._id

            //no botão usa função onclick vai chamar a função que vai receber no props passando o elemento "todo" que será removido

            list.map(todo => (
                <tr  key={todo._id}> 
                    <td>{todo.description}</td>
                    <td> 
                        <IconButton style='danger' icon='trash-o' onClick={()=>props.handleRemove(todo)}></IconButton> 
                    </td>
                </tr>
            ))
        )
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}