import React from 'react'
import MainVisual from './MainVisual'
import Best from './Best'
import Total from './Total';

const Main = () => {
  return (
    <div className='Main'>
          <MainVisual />
          <Best />
          <Total/>
    </div>
  )
}

export default Main