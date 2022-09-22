import React from 'react'
import MainVisual from './MainVisual'
import Best from './Best'
import Total from './Total';
import Environment from './Environment'
import Unesco from './Unesco';

const Main = () => {
  return (
    <div className='Main'>
      <MainVisual />
      <Best />
      <Total />
      <Environment />
      <Unesco />
    </div>
  )
}

export default Main