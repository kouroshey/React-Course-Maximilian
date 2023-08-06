import React from 'react'
import Todo from './Todo'

const TodoCondition = () => {
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

}

export default TodoCondition