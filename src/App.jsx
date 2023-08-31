import { useState, useEffect } from "react";
import { NewList } from "./components/NewList"
import { CardsList } from "./components/CardsList";



function App() {
  // almacenar las nuevas listas en localStorage
    const [lists, setLists] = useState(JSON.parse(localStorage.getItem("lists")) || []);
    const [count, setCount] = useState(parseInt(localStorage.getItem("count")) || 0); // Obtener count de localStorage
  

    useEffect(() => {
      // Guardar count en localStorage cada vez que cambie
      localStorage.setItem("count", count.toString());
    }, [count]);


    const addList = (newList) => {
      const updatedLists = [...lists, newList];
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));    };

    const removeList = (index) => {
      const updatedLists = [...lists];

      if (updatedLists[index].completed) {
        setCount(count - 1); // Restar al contador solo si la tarea está marcada como completada
      }

      // splice elimina un elemento del array y devuelve un nuevo array
      updatedLists.splice(index, 1);
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));
    };

    const toggleCompleted = (index) => {
      const updatedLists = [...lists];
      updatedLists[index].completed = !updatedLists[index].completed;
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));

      // Actualizar el contador según el estado de la tarea completada
      if (updatedLists[index].completed) {
        setCount(count + 1);
      } else if (count > 0) {
        setCount(count - 1);
      }
    };

  
    return (
      <section className="w-full min-h-screen grid place-content-center gap-5 bg-blue-100">
        <h1 className="text-center font-black text-5xl">To do list</h1>
        <NewList addList={addList} /> {/* Pasando addList aquí */}
        {lists.map((list, index) => (
          <CardsList 
            key={index}
            list={list}
            onComplete={() => toggleCompleted(index)}
            onDelete={() => removeList(index)} />
        ))}
        <p className="text-center mt-5 mb-5">Completed: {count}</p>
      </section>
    );
}

export default App
