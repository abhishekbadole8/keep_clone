import { useState } from "react";
import Todo from "./Todo";
import "./styles.css"
import { v4 as uuidv4 } from "uuid"
uuidv4()

function TodoWrapper() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        setTodos((prevTodo) => [
            ...prevTodo, { id: uuidv4(), content: inputValue, isEditing: false, isCompleted: false }
        ])
        setInputValue('')
    }

    function handleEdit(selectedTodo) {
        setEditTodo({ ...selectedTodo, isEditing: !selectedTodo.isEditing })
        setInputValue(selectedTodo.content)
    }

    function handleUpdate(id) {
        const new_content = inputValue
        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id == id ? { ...todo, content: new_content, isEditing: false } : todo
            ))
        setEditTodo({})
        setInputValue('')
    }

    function handleComplete(id) {
        setTodos((prevTodo) => prevTodo.map((todo) => todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    }

    function handleDelete(id) {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <div className="head-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="head-input" placeholder="Add to do ....." value={Object.keys(editTodo).length === 0 ? inputValue : ""} onChange={(e) => setInputValue(e.target.value)} />
                    <button type="submit" className="add-btn">Add</button>
                </form>
            </div>

            <div className="todo-container">

                < Todo todos={todos} editTodo={editTodo} setEditTodo={setEditTodo} handleEdit={handleEdit} inputValue={inputValue}
                    setInputValue={setInputValue} handleDelete={handleDelete} handleUpdate={handleUpdate} handleComplete={handleComplete} />

            </div>
        </>
    )
}

export default TodoWrapper;