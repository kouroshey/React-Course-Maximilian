import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [result, setResult] = useState([])

    useEffect(() => {
        const fetchingData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json()
            setTodos(data)
        }

        fetchingData()
    }, [])

    const sortTodoHandler = value => {
        if (value === 'completed') {
            setResult(todos.filter(todo => todo.completed === true))
        } else if (value === 'pending') {
            setResult(todos.filter(todo => todo.completed === false))
        } else {
            setResult(todos)
        }
    }

    let todoItems =
        result.length ? result.map(todo => (
            <Todo {...todo} />
        )) : todos.map(todo => (<Todo {...todo} />))

    return (
        <>
            <div className="todos-container w-full">
                <div className="todos-content w-7/12 bg-white mx-auto mt-4 rounded-md flex flex-col">
                    <div className="todos-header w-full bg-blue-200 p-4 flex justify-between items-center text-xl rounded">
                        <p>Todo ID</p>
                        <p>Title</p>
                        <select onChange={(e) => sortTodoHandler(e.target.value)} >
                            <option value="all">all</option>
                            <option value="completed">completed</option>
                            <option value="pending">pending</option>
                        </select>
                    </div>
                    <div className="todos-body">
                        {todoItems}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos