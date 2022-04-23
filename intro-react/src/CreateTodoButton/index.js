import React from "react";
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext'
// arrow function
function CreateTodoButton () {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    const onClickButton = () =>{
    setOpenModal(!openModal)
};
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };