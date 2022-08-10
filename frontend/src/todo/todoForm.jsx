import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props =>{
    //função para fazer o teste se a tecla ta apertada
    const keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    
    return (
        <div role='form' className="todoForm">
            <Grid cols='12 9 10'>
                <input 
                    className='form-control' 
                    id="description" 
                    placeholder="Adicione uma tarefa" 
                    onChange={props.handleChange} 
                    value={props.description}
                    onKeyUp={keyHandler}
                />
                
            </Grid>
            
            <Grid cols='12 3 2'>
                
                <IconButton btnStyle='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton btnStyle='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton btnStyle='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}