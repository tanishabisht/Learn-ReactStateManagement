import React, {useState, memo, createContext, useContext, Children} from 'react'


export default function GlobalState() {
  return(
    <CountryProvider>
      <AppContent />
    </CountryProvider>
  )
}


function AppContent(){
  return (
    <div>
      <CountryDetails />
      <CountryPicker />
    </div>
  );
}


const CountryContext = createContext();
function CountryProvider({children}){
  const [country, setCountry] = useState("CA")
  return <CountryContext.Provider value={{country, setCountry}}>
    {children}
  </CountryContext.Provider>
}


function CountryPicker(){
  const {country, setCountry} = useContext(CountryContext)
  return(
    <select value={country} onChange={e => setCountry(e.target.value)}>
      <option value="CA">Canada</option>
      <option value="CO">Colombia</option>
    </select>
  )
}


function CountryDetails(){
  const {country} = useContext(CountryContext)
  return <h1>{country}</h1>
}