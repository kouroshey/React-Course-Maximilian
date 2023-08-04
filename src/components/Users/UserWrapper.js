import React from 'react'
import './UserWrapper.css'
const UserWrapper = ({children}) => {
  return (
      <>
          <div className="childrenWrapper">
              {
                  children.map(child => (
                      <div className="child-elem">{child}</div>
                ))
              }
          </div>
      </>
  )
}

export default UserWrapper