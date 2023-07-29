import "./styles.css"

function Todo({ todos, editTodo, setEditTodo, handleEdit, handleDelete, handleUpdate, handleComplete, setInputValue }) {

    return (
        <>
            {todos.map((todo) => {

                const { id, content, isEditing, isCompleted } = todo

                return (
                    <div className={`${'todo'} ${isCompleted ? "complete" : ""}`} key={id}>

                        <div className="todo-content">

                            <input type="checkbox" className="todo-complete" onClick={() => handleComplete(id)} />

                            {isEditing ?
                                <input type="text" className="todo-input-edit" value={editTodo.content} onChange={(e) => setInputValue(e.target.value)} /> :
                                <input type="text" className="todo-input" value={content} />}
                        </div>

                        <div className="buttons">

                            {isEditing ?
                                <i class="fa-solid fa-upload" onClick={() => handleUpdate(id)}></i > :
                                <i class="fa-solid fa-pen-to-square" onClick={() => handleEdit(todo)}></i>}

                            <i class="fa-solid fa-trash" onClick={() => handleDelete(id)}></i>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Todo;