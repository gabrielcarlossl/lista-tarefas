import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props =>(
    <div role='form' className="todoForm">
        <Grid cols='12 9 10'>
            <input className='form-control' id="description" placeholder="Adicione uma tarefa" onChange={props.handleChange} value={props.description}/>
            
        </Grid>
         
        <Grid cols='12 3 2'>
            
            <IconButton btnStyle='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>        
    </div>
)