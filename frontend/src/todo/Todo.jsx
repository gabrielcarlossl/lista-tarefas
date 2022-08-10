import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this) // para que ele tenha a referencia certa deve ser adicionado dentro do construtor
        
        this.refresh() //chama a função no construtor para iniciar ela já carregada
        
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)//filtro para ordenar em ordem crescente
                .then(resp=>this.setState({...this.setState, description:'', list: resp.data})) // tras a lista atualizada e zera descrição
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())//sempre que adicionar ele vai trazer a lista atualizada que acabei de adicionar 
    }
    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
                .then(resp => this.refresh()) // passa o url e o id, deve ser passado o id para localizar, quando vier o resultado, chama o refresh para atualizar na tela e a lista sair de la
    }

    //o handleremove deve ser adicionado dentro do TODOLIST para ele ser chamado
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/> 
            </div>
        )
    }
}