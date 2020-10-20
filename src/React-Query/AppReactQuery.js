import React, {useState} from 'react'
import {ReactQueryDevtools} from 'react-query-devtools'


// The net ninja
import Navbar from './Navbar'
import Planets from './Planets'
import People from './People'


export default function AppReactQuery() {
    const [page, setPage] = useState('planets')

    return(
        <>
        <div className="App">
            <h1>Star Wars Info</h1>
            <Navbar setPage={setPage}/>
            <div className="content">
                {page==='planets'?<Planets/>:<People/>}
            </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
        </>
    )
}