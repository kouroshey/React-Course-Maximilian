import React from 'react'

const User = ({id,username, age}) => {
  return (
    <>  
      <p className="user w-full border-gray-300 border-2 py-2 px-4 rounded">{`${id}: ${username} (${age} years old) `}</p>
    </>
  )
}

export default User