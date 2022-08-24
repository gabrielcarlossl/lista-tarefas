/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { markAsDone, markAsPending, remove } from "./todoActions";
import IconButton from "../template/IconButton";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || []; //se a lista esta setada no props a lista entra na constante se não estiver ela vai para o array vazio

    return (
      //para que o react não reclame a que os elementos filhos do array tenham uma chave unica coloca o todo._id

      //no botão usa função onclick vai chamar a função que vai receber no props passando o elemento "todo" que será removido

      list.map((todo) => (
        <tr key={todo._id}>
          <td className={todo.done ? "markedAsDone" : ""}>
            {todo.description}
          </td>
          <td>
            <IconButton
              btnStyle="success"
              icon="check"
              hide={todo.done}
              onClick={() => props.markAsDone(todo)}
            />
            <IconButton
              btnStyle="warning"
              icon="undo"
              hide={!todo.done}
              onClick={() => props.markAsPending(todo)}
            />
            <IconButton
              btnStyle="danger"
              icon="trash-o"
              hide={!todo.done}
              onClick={() => props.remove(todo)}
            />
          </td>
        </tr>
      ))
    );
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

//metodo para mapear o estado do redux com as propriedades do objeto

const mapStateToProps = (state) => ({ list: state.todo.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
