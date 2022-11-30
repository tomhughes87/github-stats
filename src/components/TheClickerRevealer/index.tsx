
import React, { useState } from 'react'
import './index.css'
import { useEffect } from 'react';
import MakeTitle from '../MakeTitle';

export default function TheClickerRevealer(props:any) {

const key = MakeTitle(props.data[0])

if(props.data[1]==null){

  props.data[1]=`User doesn't have ${key} info`
}

  return (
    <>
    <div className='clickerRevealer-container'>
      <div id='clickerRevealer-back-circle'>
        <p className='clickerRevealer-back-text'>{props.data[1]}</p>
      </div>
      <div id='clickerRevealer-front-circle'>
        <p className='clickerRevealer-front-text'>{key}</p>
      </div>
    </div>
    </>
  )
}
