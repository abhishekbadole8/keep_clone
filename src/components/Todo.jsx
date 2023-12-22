import "../styles.css"

function Todo({ todos, editTodo, setEditTodo, handleEdit, handleDelete, handleUpdate, handleColor, setInputContent, setInputTitle, inputTitle, inputContent }) {

    return (
        <>
            {todos.map((todo) => {

                const { id, title, content, isEditing, color } = todo

                return (
                    <div className='todo' style={{ backgroundColor: color }} key={id}>

                        <div className="todo-content">
                            {/* Add title input */}
                            {editTodo.id === id && editTodo.isEditing ? (
                                <input
                                    type="text"
                                    className="todo-input-title"
                                    value={inputTitle}
                                    onChange={(e) => setInputTitle(e.target.value)}
                                    placeholder="Enter title"
                                />
                            ) : (
                                <h2 className="todo-title">{title}</h2>
                            )}

                            {/* Add content input */}
                            {editTodo.id === id && editTodo.isEditing ? (
                                <textarea
                                    className="todo-input-edit"
                                    value={inputContent}
                                    onChange={(e) => setInputContent(e.target.value)}
                                    placeholder="Enter content"
                                />
                            ) : (
                                <p className="todo-input">{content}</p>
                            )}
                        </div>

                        <div className="buttons">

                            {editTodo.id == id && editTodo.isEditing ?
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