/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = { description: '', list: [] }

// função que representa o reducer, recebe o estado atual e a action, sempre que a action for executada os reducers da aplicação são chamados
// e você decide se quer mudar o estado dentro desse reducer ou se quer manter o estado
// recebe 2 parametros o state e a action 
// cria o switch vai testar os tipos de ações gerados, se a ação for quiando a descrição mudar, vai retornar o novo objeto que vai colocar a descrição como action.payload
// o payload vem do evento disparado no campo do input 
const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload}
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}

export default todoReducer