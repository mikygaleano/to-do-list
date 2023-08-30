import { useState } from "react";
import { NewList } from "./components/NewList"
import { CardsList } from "./components/CardsList";



function App() {
  // almacenar las nuevas listas en localStorage
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("lists")) || []);
  
    const addList = (newList) => {
      const updatedLists = [...lists, newList];
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));    };

    const removeList = (index) => {
      const updatedLists = [...lists];
      // splice elimina un elemento del array y devuelve un nuevo array
      updatedLists.splice(index, 1);
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));
    };
  
    return (
      <>
        <h1 className="text-center">To do list</h1>
        <NewList addList={addList} /> {/* Pasando addList aquí */}
        {lists.map((list, index) => (
          <CardsList key={index} list={list} onDelete={() => removeList(index)} />
        ))}
      </>
    );
}

export default App
