import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoCounter.css';

function TodoCounter(){
    const { totalTodos, completedTodos} = React.useContext(TodoContext); 
    return(
        <h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

// exportando de esta manera, obligamos que al importar se llame con este mismo nombre
export { TodoCounter };