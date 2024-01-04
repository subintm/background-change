
import { useState,button } from 'react'
import './App.css'
import React from 'react'

function App() {
  const[backgroundColor,setbackgroundcolor]=useState('blue');
  const chaneColor=()=>{
    const blue='blue'
    setbackgroundcolor(blue)
  }
  const chaneColor2=()=>{
    const green='green'
    setbackgroundcolor(green)
  }
  const chaneColor3=()=>{
    const yellow='yellow'
    setbackgroundcolor(yellow)
  }
  const chaneColor4=()=>{
    const Red='Red'
    setbackgroundcolor(Red)
  }


  return (
    <>
    <div style={{backgroundColor,width:'100%',height:'100vh'}} className='text-center '>
     <h1>Change background colour</h1>
     <div >
     <button onClick={chaneColor} type="button" class="btn btn-primary m-2">Blue</button>
    <button onClick={chaneColor2} type="button" class="btn btn-success m2">green</button>
    <button onClick={chaneColor3} type="button" class="btn btn-warning m-2">yellow</button>
     <button onClick={chaneColor4} type="button" class="btn btn-danger m-2">Red</button>
     </div>

     </div>
    </>
  )
}

export default App
// style={{textAlign:"center",width:'100%',height:"100vh", backgroundColor:'red'}}