import { useState } from "react";
import { NewList } from "./components/NewList"
import { CardsList } from "./components/CardsList";



function App() {


  const [lists, setLists] = useState([]);
  
    const addList = (newList) => {
      setLists([...lists, newList]);
    };

    const removeList = (index) => {
      const updatedLists = [...lists];
      // splice elimina un elemento del array y devuelve un nuevo array
      updatedLists.splice(index, 1);
      setLists(updatedLists);
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
