import React, {useState, memo, createContext, useContext, Children} from 'react'


export default function LiftState(){
    const [country, setCountry] = useState("CA")
    return (
        <div>
            <CountryDetails country={country} />
            <CountryPicker country={country} setCountry={setCountry} />
        </div>
    );
}


function CountryDetails({country}){
    return <h1>{country}</h1>
}


function CountryPicker({country, setCountry}){
    return(
        <select value={country} onChange={e => setCountry(e.target.value)}>
            <option value="CA">Canada</option>
            <option value="CO">Colombia</option>
        </select>
    )
}