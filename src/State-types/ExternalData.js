import React, {useState, memo, createContext, useContext, Children} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'


export default function ExternalData() {
  return(
    <CountryProvider>
      <AppContent />
    </CountryProvider>
  )
}


const AppContent = memo(() => {
  return (
    <div>
      <CountryPicker />
      <CountryDetails />
    </div>
  );
})


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

// https://restcountries.eu/rest/v2/alpha/ca
function fetchCountry(country){
    return axios(`https://restcountries.eu/rest/v2/alpha/${country}`)
    // const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
    // const data = await res.json()
    // return data
}


function CountryDetails(){
  const {country} = useContext(CountryContext)
  // country = key ... means everytime this key changes is when you go and fetch new data
  // fetchCountry = function that will be performed everytime key is changed
  const {data, isLoading, error} = useQuery(country, fetchCountry) 

  if(isLoading) return <span>loading...</span>
  if(error) return <span>oops! error occured</span>

  return(
    <div>
        <h1>{country}</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}