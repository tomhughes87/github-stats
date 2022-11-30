
import React, { useState } from 'react'
import './index.css'
import { useEffect } from 'react';
import MakeTitle from '../MakeTitle';

export default function ShrinkRevealer(props:any) {

  const key = MakeTitle(props.data[0])

  return (
    <>
    <div className='shrinkRevealMainContainer'>
      <div id='shrinkRevealBACK'>
        <p className='backText'>{props.data[1]}</p>
      </div>
      <div id='shrinkRevealFront'>
        <p className='frontText'>{key}</p>
      </div>
    </div>
    </>
  )
}
