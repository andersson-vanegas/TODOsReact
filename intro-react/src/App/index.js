// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
//aqui ira la parte logica de nuestro proyecto

function App() { //<-esto es una funcion componente
  // SINTAXIS JSX
  return (

    <TodoProvider>
      {/* todo componente que este dentro de AppUI vas a poder consumir todo lo que ese dentro de TodoProvider */}
      <AppUI/> 
    </TodoProvider>
  );
}

export default App;
