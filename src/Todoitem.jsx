import {useState} from 'react';

const Todoitem = ({item, index, setTodo}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(item);

    const handleDelete = () => {
        setTodo((previousTodo) => {
            const todoCopy = [...previousTodo];
            todoCopy.splice(index,1);
            console.log(todoCopy);
            return todoCopy;
        })
    }

    const handleUpdate = () => {
        setTodo((previousTodo) => {
            const todoCopy = [...previousTodo];
            todoCopy[index] = itemToEdit;

            return todoCopy;

        })

        setIsEditMode(false);
    }

    return (
        <div className="todo-item">
            {isEditMode ?
             <input value={itemToEdit} onChange={(e) => setItemToEdit(e.target.value)} /> :
             <div className="todo-item-content">{item}</div>
            }
            <div className="todo-item-actions">
                {isEditMode ? 
                    <>
                        <button className="action-button action-edit" onClick={handleUpdate}>Update</button>
                        <button className="action-button action-delete" onClick={() =>setIsEditMode(false)}>Cancel</button>
                    </> 
                    :
                    <>
                        <button className="action-button action-edit" onClick={() => setIsEditMode(true)}>Edit</button>
                        <button className="action-button action-delete" onClick={handleDelete}>Delete</button>
                    </>
                }
            </div>
           
            </div>
    )
};

export default Todoitem;