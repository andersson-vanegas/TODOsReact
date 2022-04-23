import React from "react";
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();

const defaultTodos = [
    {text: 'cortar cebolla ', completed: true},
    {text: 'tomar el curso de intro a react', completed: false},
    {text: 'tomar el curso ', completed: false},
    {text: 'maldito error ', completed: false},

]

// esta funcion va a funcionar como puente para conectar los componentes que esten aqui con nuestro .Consumer 
function TodoProvider(props) {
    // aqui llamaremos a nuestro custom hook
    //aqui ira la parte logica de nuestro proyecto
    const {
        item: Todos,
        saveitem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    // estados de TodoSearch
    const [SearchValue, SetSearchValue] = React.useState('');
    // Estados para el Modal
    const [openModal, setOpenModal] = React.useState(false);

    // eL Todos puede utilizar metodos porque es un array, el !! significa true que  define que, que todo ha sido completado 
    const completedTodos = Todos.filter(todo => !!todo.completed).length;
    const totalTodos = Todos.length;

    let SearchedTodos = [];

    // aqui creamos la funcion del buscador
    // si el usuario, no ha escrito nada en el input va a mostrar todos los todos 
    if (!SearchValue.length > 1) {
        SearchedTodos = Todos;
        // por el contrario si el usuario escribio algo, primero pasaremos el texto a minusculas, y luego con el metodo includes hacemos la busqueda
    } else {
        SearchedTodos = Todos.filter(todo => {
            console.log(todo);
            console.log(todo.text);
            const todotext = todo.text.toLowerCase();
            const Searchtext = SearchValue.toLowerCase();
            return todotext.includes(Searchtext);
        });
    }


    const addTodo = (text) => {
        const newTodos = [...Todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };


    // Aqui haremos la funcion del completar todos
    const completeTodo = (text) => {
        // buscaremos un todo que cumpla con nuestras condiciones
        const todoIndex = Todos.findIndex(todo => todo.text === text);
        // clonaremos y crearemos una nueva lista de Todos
        const newTodos = [...Todos];
        // el todo que cumpla nuestra condicion sera marcado como true de completado
        newTodos[todoIndex].completed = true;
        // renderizamos la nueva lista de Todos
        saveTodos(newTodos);
    }


    // aqui haremos la funcion de eliminar todos
    const DeleteTodo = (text) => {
        const todoIndex = Todos.findIndex(todo => todo.text === text);
        const newTodos = [...Todos];
        //aqui elegiremos que todo eliminar, el primer parametro es cual todo vamos a a borrar, el segundo es la cantidad en este caso 1
        newTodos.splice(todoIndex, 1)
        // renderizamos la nueva lista de Todos
        saveTodos(newTodos);
    }

    return (
        // como vamos a compartir varias propiedades decimos que value va hacer un Object
        // esto es un objecto javascript
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            SearchValue,
            SetSearchValue,
            SearchedTodos,
            addTodo,
            completeTodo,
            DeleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
            {/* el .children nos permite tener conecion con el hijo de TodoProvider */}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };