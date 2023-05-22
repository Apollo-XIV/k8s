'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Main() {

  // Connect to database and ping it every 5 seconds
  // if connection is stable, display green background
  // if test fails, background turns red

  const [health, setHealth] = useState("Unknown");
  const [status, setStatus] = useState("None");
  let bgstyle="black";



  

  useEffect(() => {
    if (health == "healthy") {
      bgstyle="green";
    } else if (health == "Unknown") {
      bgstyle="black";
    } else {
      bgstyle="red";
    }
  },[health]);



  return (<>
<div className="fixed inset-0 m-0 flex justify-center items-center" style={{backgroundColor: bgstyle}}>
    <div id="center" className='font-bold uppercase'>
      <h1 className='text-4xl'>Connection: {health}</h1>
      <p>Status: {status}</p>
      
    </div>
  </div>
  
  
  
  
  </>)
}
