import React, { useState } from 'react'
import User from './User'
const AddUsers = () => {
    const [users, setUsers] = useState([])

    const [usernameInput, setUsernameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [userID, setuserID] = useState(1);

    const addUserHandler = (e, username, age) => {
        e.preventDefault()
        if (username && age) {
            setUsers(prev => [...prev, { id: userID, username: username, age: age }])
            setuserID(prev => prev += 1)
        }
    }
    return (
        <>
            <div className="form-container w-full flex flex-col gap-4">
                <div className="form-content bg-white w-5/12 mx-auto mt-8 rounded-md">
                    <form action="#" className='p-5 flex flex-col gap-1 items-start' onSubmit={e => addUserHandler(e, usernameInput, ageInput)}>
                        <label className='pl-1' htmlFor="username-input">username</label>
                        <input onChange={e => setUsernameInput(e.target.value)} className='bg-gray-100 p-2 w-full rounded-md mb-5 outline-blue-500' type="text" id='username-input' placeholder='please input the username...' />
                        <label className='pl-1' htmlFor="age-input">Age(years)</label>
                        <input onChange={e => setAgeInput(e.target.value)} className='bg-gray-100 p-2 w-full rounded-md mb-5 outline-blue-500' type="number" id='password-input' placeholder='please input the age...' />
                        <input className='bg-blue-400 py-2 px-6 rounded-md' type="submit" value='add user' />
                    </form>
                </div>
                <div className="flex flex-col gap-2 users-content p-5 bg-white w-5/12 mx-auto rounded-md">
                    {users.length === 0  ? <p>there is not any user!</p> : users.map(user => <User {...user} />)}
                </div>
            </div>
        </>
    )
}

export default AddUsers