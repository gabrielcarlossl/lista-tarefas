import axios from "axios";

const URL = "http://localhost:3003/api/todos";

//  Essa função é a ACTION CREATOR, o corpo da função retorna um objeto
// ele representa a action, a action tem obrigatoriamente o objeito TYPE, e também pode ter outro atributo
export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

// nova action que vai buscar o serviço no backend
export const search = () => {
  return (dispatch, getState) => {
      const description = getState().todo.description
      const search = description ? `&description__regex=/${description}/` : ''
      const request = axios.get(`${URL}?sort=-createdAt${search}`)
          .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
  }
}

//metodo de adicioanr vai receber a descrição, como paramentro, e o metodo vai fazer a requisição de post pegando a url,
// e depois passa o objeto que tem a descrição da tarefa, sendo isso uma action creator, vai retornar um objeto com o type e o payload, com o request

export const add = (description) => {
  return (dispatch) => {
    axios
      .post(URL, { description })
      .then((resp) => dispatch(clear()))
      .then((resp) => dispatch(search()));
  };
};

export const markAsDone = (todo) => {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => dispatch(search())) 
  };
};

export const markAsPending = (todo) => {
    return (dispatch) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) =>{
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}