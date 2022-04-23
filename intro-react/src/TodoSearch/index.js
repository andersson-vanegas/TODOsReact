import React from "react";
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'
// import {FaSearch}   from "react-icons/fa";
// cuando el componente padre llame a este componente tendra que mandar dos props
function TodoSearch(){
const {SearchValue, SetSearchValue} = React.useContext(TodoContext) 

const OnSearchValueChange = (event) => {
    console.log(event.target.value);
    SetSearchValue(event.target.value);
}
    return(
    <input  
    className="TodoSearch"
    placeholder="Tomate "
    // al escribir en el input el onchange escuchara los cambios del input y cambiara su estado con el SetSearchValue
    value={SearchValue}
    onChange={OnSearchValueChange}    
    />
    )};


export { TodoSearch };