import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#16143a]'>
        
        {/* Container */}
        <div className='max-w-{1000px} mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi my name is</p>
            <h1>Tomás</h1>
            <h2>Im a full stack developer oriented to both part of develop, but I like frontend more</h2>
        </div>
    </div>
  )
}

export default Home