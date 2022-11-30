
import React, { useState } from 'react'
import './index.css'
import MakeTitle from '../MakeTitle';

export default function Displayer(props:any) {

const key = MakeTitle(props.data[0])

  return (
    <>
    <div className='displayerMainContainer'>
      <div id='displayerBACK'>
        <p className='backText'>{props.data[1]}</p>
      </div>
      <div id='displayer'>
        <p className='frontText'>{key}</p>
      </div>
    </div>
    </>
  )
}