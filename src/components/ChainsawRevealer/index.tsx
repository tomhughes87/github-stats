import React, { useState } from 'react'
import './index.css'
import { useEffect } from 'react';
import MakeTitle from '../MakeTitle';



export default function TheChainsawRevealer(props:any) {

  const key=MakeTitle (props.data[0])

  return (
    <>
    <div className='chainsawRevealer-container'>
      <div id='chainsawRevealer-front-circle'>
        <p className='chainsawRevealer-front-text'>{key}</p>
        <p className='chainsawRevealer-back-text'>{props.data[1]}</p>
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
