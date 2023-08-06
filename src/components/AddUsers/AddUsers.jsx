import React, { useState } from 'react'
import User from './User'
const AddUsers = () => {
    const [users, setUsers] = useState([])

    const [usernameInput, setUsernameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [userID, setuserID] = useState(1);
    const [isUsernameValid, setIsUsernamevalid] = useState(true)
    const [isAgeValid, setIsAgevalid] = useState(true)

    const addUserHandler = (e) => {
        e.preventDefault()
        if (isAgeValid && isUsernameValid) {
            setUsers(prev => [...prev, { id: userID, username: usernameInput, age: ageInput }])
            setuserID(prev => prev += 1)
        } else {
            
        }
    }

    const usernameValidationHandler = (username) => {
        if (username.length < 4) {
            console.log(username.length);
            setIsUsernamevalid(false)
        }
        else {
            setIsUsernamevalid(true)
            setUsernameInput(username)
        }
    }

    const ageValidationHandler = (age) => {
        if (age < 18) {
            setIsAgevalid(false)
        } else {
            setAgeInput(age)
            setIsAgevalid(true)
        }

    }

    return (
        <>
            <div className="form-container w-full flex flex-col gap-4">
                <div className="form-content bg-white w-5/12 mx-auto mt-8 rounded-md">
                    <form action="#" className='p-5 flex flex-col gap-1 items-start' onSubmit={e => addUserHandler(e)}>
                        <label className='pl-1' htmlFor="username-input">username</label>
                        <input onChange={e => usernameValidationHandler(e.target.value)} className={` p-2 w-full rounded-md mb-5 ${!isUsernameValid ? 'outline-red-400 bg-red-300' : 'outline-blue-500 bg-gray-100'}`} type="text" id='username-input' placeholder='please input the username...' />
                        <label className='pl-1' htmlFor="age-input">Age(years)</label>
                        <input onChange={e => ageValidationHandler(e.target.value)} className={` p-2 w-full rounded-md mb-5 ${!isAgeValid ? 'outline-red-400 bg-red-300' : 'outline-blue-500 bg-gray-100'}`} type="number" id='password-input' placeholder='please input the age...' />
                        <input className='bg-blue-400 py-2 px-6 rounded-md' type="submit" value='add user' />
                    </form>
                </div>
                <div className="flex flex-col gap-2 users-content p-5 bg-white w-5/12 mx-auto rounded-md">
                    {users.length === 0 ? <p>there is not any user!</p> : users.map(user => <User {...user} />)}
                </div>
            </div>
        </>
    )
}

export default AddUsers