import React from "react";

// esto es un custom hook
function useLocalStorage(itemName, initialvalue) {
    const [error, setError] = React.useState(false) // lo inicializamos false porque no hay ningun error
    // estado loading
    const [loading, setloading] = React.useState(true)//inicialmente lo ponemos en true para saber que esta cargando
    // Estados de TodoCounter
    const [item, setItem] = React.useState(initialvalue);

    //aqui haremos el uso de use effect, recordemos que un hook puede llamar otros hooks
    React.useEffect(() => {
        setTimeout(() => {
            try {
                // simularemos el loading
                // aqui va el localStorage, esto va a ha a persistir los todos creados, es decir los va a guardar en itemName
                const localStorageitem = localStorage.getItem(itemName);
                let parseditem;

                // si no existe un todo, por defecto vamos a poner un array vacio, recordando que .stringify es un convertidor de objecto a texto
                if (!localStorageitem) {
                    localStorage.setItem(itemName, JSON.stringify(initialvalue));
                    parseditem = initialvalue;
                }
                // si existe un todo, entonces vamos a mandar la lista de todos creados
                else {
                    parseditem = JSON.parse(localStorageitem);
                }
                // cuando ya halla pasado el segundo, y ya se haya actualizado el estado, el setloading se definira como false, como muestra de que todo esta bien
                setItem(parseditem);
                setloading(false);  // ya termino de cargar
            } catch (error) {
                setError(error)
            }
        }, 3000);
    })



    // guardar item 
    const saveitem = (newItem) => {
        try {
            const stringifieditem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifieditem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }
    // ahora necesitamos que tambien actualize el estado loading
    return {
        item,
        saveitem,
        loading,//cuando tenemos tres o mas estados lo recomendable es trabajar con objectos
        error,
    };
}


export { useLocalStorage };