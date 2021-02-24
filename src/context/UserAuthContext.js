import React, { useState } from 'react'

const UserAuthContext =  React.createContext({})

export function UserAuthContextProvider({children}) {
  const [contextUser, setContextUser] = useState()
  return <UserAuthContext.Provider value={{contextUser, setContextUser}}>
    {children}
  </UserAuthContext.Provider>
}
export default UserAuthContext