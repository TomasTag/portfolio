import React from 'react'
import underEvImg from "../Assets/underEvImg.jpeg"

const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300 bg-[#16143a]">
        <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-lime-500">Works</p>
                <p className="py-5">// Check out some of my works</p>
            </div>
            
            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                {/* Grid item */}
                <div 
                    style={{backgroundImage: `url(${underEvImg})`}} 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* Hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Under Event App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works