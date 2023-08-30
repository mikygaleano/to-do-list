

export const CardsList = ({ list, onDelete })=> {

    return (
        <>
            <h3>{list.title}</h3>
            <p>Date: {list.date}</p>
            <p>Description: {list.description}</p>
            <button onClick={onDelete}>Delete</button>
        </>
    )
}