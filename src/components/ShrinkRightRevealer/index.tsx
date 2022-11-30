
import React, { useState } from 'react'
import './index.css'
import { useEffect } from 'react';
import MakeTitle from '../MakeTitle';

export default function ShrinkRightRevealer(props:any) {

  const key = MakeTitle(props.data[0])

  return (
    <>
    <div className='shrinkRight-container'>
      <div id='shrinkRight-back-circle'>
        <p className='shrinkRight-back-text'>{props.data[1]}</p>
      </div>
      <div id='shrinkRight-front-circle'>
        <p className='shrinkRight-front-text'>{key}</p>
      </div>
    </div>
    </>
  )
}
