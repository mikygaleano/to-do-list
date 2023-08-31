

export const CardsList = ({ list, onDelete, onComplete })=> {

    return (
        <div className={`border p-4 rounded-md shadow-md ${list.completed ? "bg-green-100" : "bg-white"}`}>
            <h3 className={list.completed ? "line-through text-green-600" : ""}>{list.title}</h3>
            <p>Date: {list.date}</p>
            <p>Description: {list.description}</p>
            <div className="flex items-center">
                <input
                type="checkbox"
                checked={list.completed}
                onChange={onComplete}
                className="mr-2"
                />
            </div>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}