import { useState } from "react"
import { ButtonAddList } from "./ButtonAddList";
import { FormNewList } from "./FormNewList";


export const NewList = ({ addList })=> {


    const [ formList, setFormList ] = useState(false);

    const handleAddForm = ()=> {
        setFormList(true)
    };

    const handleRemoveForm = ()=> {
        setFormList(false)
    };
    return (
        <>
            {!formList ? (
                <ButtonAddList addForm={handleAddForm} />
            ) : (
                <FormNewList addList={addList} removeForm={handleRemoveForm} />
            )}
        </>
    )
}