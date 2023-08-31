import { useState } from "react";

export const FormNewList = ({ removeForm, addList })=> {

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: "",
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addList(formData);
        setFormData({
          title: "",
          date: "",
          description: "",
        });
    };
    
    return (
        <div className="w-full bg-blue-100 max-h-screen flex flex-col items-center p-2 border-black rounded-md shadow-md">
          <form className="w-1/2 flex flex-col flex-wrap place-content-center gap-2" onSubmit={handleSubmit}>
            <h3 className="text-center">Add new list</h3>
            <input
              className="hover:bg-cyan-50 bg-transparent border rounded p-1"
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
              value={formData.title}
              required
            />
            <input
              className="bg-transparent"
              type="date"
              name="date"
              onChange={handleInputChange}
              value={formData.date}
            />
            <input
              className="hover:bg-cyan-50 bg-transparent border rounded p-1"
              type="text"
              name="description"
              placeholder="Description..."
              onChange={handleInputChange}
              value={formData.description}
            />
            <button
              className="bg-yellow-200 rounded-md p-1 w-20"
              type="submit">
                Add List
            </button>
          </form>
          <button 
            className="bg-red-500 p-1 rounded-md w-20 self-end"
            onClick={removeForm}>
              X
          </button>
        </div>
      );
}