import React, { useState } from 'react'
import './App.css'
import AddUser from './components/Users/AddUser'
import UserWrapper from './components/Users/UserWrapper'

const App = () => {
  const year = new Date()
  const [firstTitle, setFirstTitle] = useState('title 1')
  const[secondTitle, setSecondTitle] = useState('title 2')
  
  const changeFirstTitle = () => {
    if (firstTitle === 'title 1') {
      setFirstTitle('title 1 changed')
    } else {
      setFirstTitle('title 1')
    }
  }
  const changeSecondTitle = () => {
    setSecondTitle('title 2 changed')
  }
  return (
    <>
      {/* <AddUser /> */}
      <UserWrapper>
        <p>{firstTitle}</p>
        <p>{secondTitle}</p>
        <p>this is user3</p>
      </UserWrapper>
      <button onClick={changeFirstTitle}>change the title1</button>
      <button onClick={changeSecondTitle}>change the title2</button>
    </>
  )
}

export default App