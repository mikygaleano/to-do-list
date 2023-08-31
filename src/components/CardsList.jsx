

export const CardsList = ({ list, onDelete, onComplete })=> {

    return (
        <div className={`border p-4 rounded-md shadow-md ${list.completed ? "bg-green-100" : "bg-white"}`}>
            <h3 className={list.completed ? "line-through text-green-600" : ""}>{list.title}</h3>
            <p className="text-gray-400 font-extralight">{list.date}</p>
            <p className="text-gray-400 font-extralight">{list.description}</p>
            <div className="flex items-center">
                <input
                type="checkbox"
                checked={list.completed}
                onChange={onComplete}
                className="mr-2"
                />
            </div>
            <button className="bg-red-600 text-white font-light p-1 rounded mt-2" onClick={onDelete}>Delete</button>
        </div>
    )
}