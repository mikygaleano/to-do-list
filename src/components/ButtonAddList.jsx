

export const ButtonAddList = ({ addForm })=> {

    return (
        <div className="flex place-content-center">
            <button onClick={addForm} className="w-56 h-56 hover:bg-slate-100 border rounded font-extralight text-5xl shadow-md">+</button>
        </div>
    )
}