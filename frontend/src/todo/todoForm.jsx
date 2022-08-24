/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/IconButton'
import { add, changeDescription, search, clear } from './todoActions' 

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props 
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={this.props.changeDescription} onKeyUp={this.keyHandler} value={this.props.description}></input>
            </Grid>
    
            <Grid cols='12 3 2'>
                {/* Mudamos o nome da propriedade style para btnStyle, pois o Lint reclamava e essa é a melhor maneira de contornar esse problema */}
                <IconButton btnStyle='primary' icon='plus' onClick={() => add(description)}></IconButton>
                <IconButton btnStyle='info' icon='search' onClick={search}/>
                <IconButton btnStyle='default' icon='close' onClick={this.props.clear}/>
            </Grid>
        </div>
        )
    }
}

// função vai retornar um objeto que vai ensinar para o react redux como ele vai mapear o estado para os atributos
// que estão dentro de props
const mapStateToProps = state => ({description: state.todo.description})

// Dipatch é o que dispara a ação e passa as ações para todos os  reducers 
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

