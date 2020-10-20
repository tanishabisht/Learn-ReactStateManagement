import React, {useState, memo, createContext, useContext, Children} from 'react'
import './index.css'


// Leigh Halliday
import AppStateTypes from './State-types/AppStateTypes'
// Dev Ed
import AppDevEd from './DevEd/AppDevEd'
// The net ninja
import AppReactQuery from './React-Query/AppReactQuery'


export default function App() {
  return(
    <div>
      <AppStateTypes/>
      <AppDevEd/>
      <AppReactQuery/>
    </div>
  )
}