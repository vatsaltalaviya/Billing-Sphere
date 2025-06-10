import React, { createContext, useState } from 'react'

export const userdataContext = createContext()
const UserContext = ({children}) => {
    const [User, setUser] = useState(null)
    
  return (
    <userdataContext.Provider value={{User , setUser}}>
        {children}
    </userdataContext.Provider>
  )
}

export default UserContext
