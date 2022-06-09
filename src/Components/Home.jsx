import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#16143a]">
        
        {/* Container */}
        <div className="max-w-60 mx-auto md:px-40 px-8 flex flex-col justify-center h-full">
            <p className="text-lime-500">Hi my name is</p>
            <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">Tomás Tagliaferri</h1>
            <h2 className="text-4xl md:text-7xl font-bold text-lime-500">Full Stack Developer</h2>
            <p className="text-[#a4b7ee] py-4 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque vel unde optio. Optio consectetur ab illum impedit, voluptatum odio voluptas molestiae nemo, sit, facilis nisi assumenda voluptates! Quae, vitae?</p>
            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-[#16143a] hover:bg-lime-500 hover:border-lime-500">
                View work 
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3"/>
                </span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Home