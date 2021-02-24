import React, {useState} from 'react'

const CarsContext = React.createContext({})

export function CarsContextProvider({children}) {
  const [cars, setCars] = useState([]);

  return <CarsContext.Provider value={{cars, setCars}}>
    {children}
  </CarsContext.Provider>
}
export default CarsContext