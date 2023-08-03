import React from 'react';
import './AddUser.css'
const AddUser = () => {
    const formSubmitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <div className="wrapper">
                <div className="form-container">
                    <h1>Login Form</h1>
                    <form action="#" onSubmit={formSubmitHandler}>
                        <label className='form-label' htmlFor='username'>username</label>
                        <input className='form-input' type='text' id='username' />
                        <label className='form-label' htmlFor='password' >password</label>
                        <input className='form-input' type='text' id='password' />
                        <input className='form-submit-btn' type='submit' value='login' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUser