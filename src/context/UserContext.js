import React, {useState} from 'react'

const UserContext = React.createContext({})

export function UserContextProvider({children}) {
  const [userContextValue, setUserContextValue] = useState({
    uid: "",
    companyName: "",
    companeyLogoUrl: ""
  })

  return <UserContext.Provider value={{userContextValue, setUserContextValue}}>
    {children}
  </UserContext.Provider>
}
export default UserContext