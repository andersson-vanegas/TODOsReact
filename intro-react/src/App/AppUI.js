import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
function AppUI() {

    const { error,
        loading,
        SearchedTodos,
        completeTodo,
        DeleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        // por cada componente necesitamos una etiqueta contenedora, para esto esta React.Fragment una etiqueta invisible que no afecta nuestros calculos ni nuestra interfaz.
        // esto es un elemento. esto es JSX, NO html
        <React.Fragment>
            {/* esto es un componente */}
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {/* //condiciones de estados */}
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading/>}
                {/* si no existe un loading y ademas no hay ningun todo entonces mandamos este mensaje */}
                {(!loading && !SearchedTodos.length) && <EmptyTodos/>}
                {/* // el TodoItem es un componente que nos ayudara a reutilizar los todos, esto con propiedades para cambiar el contenido de cada diferente todo// el TodoItem es un componente eque nos ayudara a reutilizar los todos, esto con propiedades para cambiar el contenido de cada diferente todo */}


                {SearchedTodos.map(Todo => (
                    <TodoItem
                        key={Todo.text}
                        text={Todo.text}
                        completed={Todo.completed}
                        // llama la funcion oncomplete, y envia el texto del todo
                        onComplete={() => completeTodo(Todo.text)}
                        onDelete={() => DeleteTodo(Todo.text)}
                    />
                    /* por cada todo hecho se va a renderizar un TodoItem, linea 21,22/ key nos ayuda a identificar cual componente es cual dentro de una lista, para no renderizar un elemneto que no debe, por ejemplo solo va a cambiar el texto  */
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}
export { AppUI };