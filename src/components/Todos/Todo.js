import React from 'react'

const Todo = ({id, title, completed}) => {
  return (
      <>
          <div className="todo-container w-full">
              <div className="todo-content w-full px-4 py-4 border border-gray-100 flex justify-between">
                  <div className="todo-id">{id}</div>
                  <div className="todo-title">{title}</div>
                  <div className="todo-status">{completed ? 'completed' : 'pending'}</div>
              </div>
        </div>
      </>
  )
}

export default Todo