
import React, { useState } from 'react'
import './index.css'
import { useEffect } from 'react';
import MakeTitle from '../MakeTitle';

export default function TheDropRevealer(props:any) {

  
  const key=MakeTitle (props.data[0])


  return (
    <>
    <div className='dropRevealer-container'>
      <div id='dropRevealer-back-circle'>
        <p className='dropReaveal-back-text'>{props.data[1]}</p>
      </div>
      <div id='dropRevealer-front-circle'>
        <p className='dropRevealer-front-text'>{key}</p>
      </div>
    </div>
    </>
  )
}


// const data =  fetch("https://api.github.com/users/tomhughes87", {
//     method: "GET"
//   });
// //   const jsonData =  data.json();
// // console.log(data)
// //   console.log(jsonData.results);

// function apistuff() {
    
//     fetch(`https://api.github.com/users/tomhughes87`)
//     .then((response) => console.log(response))
//     .then((actualData) => console.log(actualData));

// }
// // apistuff()
