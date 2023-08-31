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
        <div className="w-full max-h-screen flex flex-col items-center p-2 border rounded-md shadow-md">
          <form className="w-1/2 flex flex-col flex-wrap" onSubmit={handleSubmit}>
            <h3 className="text-center">Add new list</h3>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
              value={formData.title}
              required
            />
            <input
              type="date"
              name="date"
              onChange={handleInputChange}
              value={formData.date}
            />
            <input
              type="text"
              name="description"
              placeholder="Description..."
              onChange={handleInputChange}
              value={formData.description}
            />
            <button type="submit">Add List</button>
          </form>
          <button onClick={removeForm}>Remove form</button>
        </div>
      );
}