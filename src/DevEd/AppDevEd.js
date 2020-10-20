import React, {useState, memo, createContext, useContext, Children} from 'react'


// Dev Ed
import Nav from './Nav'
import {AddMovie} from './AddMovie'
import MoviesList from './MoviesList'
import {MovieProvider} from './MovieProvider'


export default function App() {
  return(
    <div>
      {/* DevEd */}
      <MovieProvider>
        <Nav/><br/><br/><br/><br/>
        <AddMovie />
        <MoviesList />
      </MovieProvider>
    </div>
  )
}