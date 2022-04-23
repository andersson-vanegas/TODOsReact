import React from 'react';
import './TodoItem.css';
import { FaTrashAlt } from "react-icons/fa";
import {FaCheckSquare}   from "react-icons/fa";

function TodoItem(props) {
    
    return ( 
        <li className="TodoItem">
            {/* Condicional: si props.complete es veradero entonces cojera otra propiedad  */}
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete }
            >
                <FaCheckSquare/>
            </span>
            <p 
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}

            </p>
            <span 
            className="Icon Icon-delete"
            // con el onclick escucharemos la accion del usuario al click
            onClick={props.onDelete}
            >
            <FaTrashAlt/>
            </span>
        </li>
    );
}

export { TodoItem };