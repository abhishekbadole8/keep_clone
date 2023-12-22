import { useState } from "react";
import Todo from "./Todo";
import "../styles.css"
import { v4 as uuidv4 } from "uuid"
uuidv4()

function TodoWrapper() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [selectedColor, setSelectedColor] = useState('#fff');
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        setTodos((prevTodo) => [
            ...prevTodo, { id: uuidv4(), title: inputTitle, content: inputContent, isEditing: false, color: selectedColor }
        ])
        setInputTitle('');
        setInputContent('')
    }

    function handleEdit(selectedTodo) {
        setEditTodo({ ...selectedTodo, isEditing: !selectedTodo.isEditing })
        setInputTitle(selectedTodo.title);
        setInputContent(selectedTodo.content)
        setSelectedColor(selectedTodo.color);
    }

    function handleUpdate(id) {
        const new_content = inputContent
        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id == id ? { ...todo, title: inputTitle, content: new_content, isEditing: false, color: selectedColor } : todo
            ))
        setEditTodo({})
        setInputTitle('');
        setInputContent('')
    }

    function handleColor(id, color) {
        setTodos((prevTodo) =>
            prevTodo.map((todo) => (todo.id === id ? { ...todo, color: color } : todo))
        );
    }

    function handleDelete(id) {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <div className="head-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" className="head-input" placeholder="Add title....." value={Object.keys(editTodo).length === 0 ? inputTitle : ""} onChange={(e) => setInputTitle(e.target.value)} />
                        <textarea
                            className="content-input"
                            placeholder="Enter content..."
                            value={Object.keys(editTodo).length === 0 ? inputContent : ""}
                            onChange={(e) => setInputContent(e.target.value)}
                        ></textarea>                    </div>
                    <input
                        type="color"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="color-input"
                    />
                    <button type="submit" className="add-btn" disabled={!inputContent && !inputTitle}>Add</button>
                </form>
            </div>

            {todos &&
                <div className="todo-container">

                    < Todo todos={todos} editTodo={editTodo} setEditTodo={setEditTodo} handleEdit={handleEdit} inputContent={inputContent}
                        setInputContent={setInputContent} handleDelete={handleDelete} handleUpdate={handleUpdate} handleColor={handleColor}
                        inputTitle={inputTitle} setInputTitle={setInputTitle} />

                </div>
            }
        </>
    )
}

export default TodoWrapper;