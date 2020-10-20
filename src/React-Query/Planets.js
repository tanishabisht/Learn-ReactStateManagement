import React, { useState } from 'react'
import {useQuery, usePaginatedQuery} from 'react-query'
import Planet from './Planet'


const fetchPlanets = async(key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
    return await res.json()
}


export default function Planets() {
    
    const [page, setPage] = useState(1)

    // const {data, status} = useQuery(['planets', page], fetchPlanets, {
    //     onSuccess: () => console.log('data is fetched successfully'),
    //     onError: () => console.log('data is not fetched')
    // })

    const {resolvedData, latestData, status} = usePaginatedQuery(['planets', page], fetchPlanets, {
        onSuccess: () => console.log('data is fetched successfully'),
        onError: () => console.log('data is not fetched')
    })

    return(
        <div className="App">
            <h2>Planets</h2>

            {/*<button onClick={() => setPage(1)}>Page 1</button>
            <button onClick={() => setPage(2)}>Page 2</button>
            <button onClick={() => setPage(3)}>Page 3</button>*/}

            {status==='loading' && (<div>Loading data...</div>)}
            {status==='error' && (<div>Error fetching data</div>)}
            {status==='success' && (
                <>
                    <button 
                        onClick={() => setPage(old => Math.max(old-1, 1))}
                        disabled={page === 1}
                    >Previous Page</button>
                    <span>{page}</span>
                    <button 
                        onClick={() => setPage(old => (!latestData || !latestData.next ? old : old+1))}
                        disabled={!latestData || !latestData.next}
                    >Next Page</button>
                    <div>
                        {resolvedData.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
                    </div>
                </>
            )}
        </div>
    )
}