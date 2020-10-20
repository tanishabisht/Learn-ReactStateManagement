import React from 'react'


// Leigh Halliday
import GlobalState from './GlobalState'
import LiftState from './LiftState'
import ExternalData from './ExternalData'


export default function AppStateTypes() {
  return(
    <div>
      {/* Leigh Halliday */}
      <LiftState/>
      <GlobalState/><br/>
      <ExternalData/>
    </div>
  )
}