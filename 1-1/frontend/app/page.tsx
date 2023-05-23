'use client'
import { useEffect, useState } from 'react'

export default function Main() {

  // Connect to database and ping it every 5 seconds
  // if connection is stable, display green background
  // if test fails, background turns red

  const [health, setHealth] = useState("Unknown");
  const [status, setStatus] = useState("None");
  const [bgstyle, setBgStyle] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus("Polling...");
      fetch("/poll")
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          setStatus("Response received.")
          setHealth(data);
        })
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  

  useEffect(() => {
    console.log("I RAN")
    if (health == "healthy") {
      setBgStyle("#5F8D4E");
    } else if (health == "Unknown") {
      setBgStyle("black");
    } else {
      setBgStyle("red");
    }
  },[health]);



  return (<>
  <div className="fixed inset-0 m-0 flex justify-center items-center" style={{backgroundColor: bgstyle}}>
    <div id="center" className='font-bold uppercase'>
      <h1 className='text-4xl'>Connection: {health}</h1>
      <p>Status: {status}</p>
      <p>V.0.1</p>
    </div>
  </div>
  </>)
}
