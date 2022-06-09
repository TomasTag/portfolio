import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#16143a] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-5xl w-full grid grid-cols-2 gap-8">
                <div className="md:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-lime-500">
                        About Me
                    </p>
                </div>
                <div></div>
            </div>
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 px-6">
                <div className="md:text-right text-4xl font-bold">
                    <p>Hi I'm Tomás, nice to meet you. Please take your time to see all about me and my works.</p>
                </div>
                <div>
                    I'm a Full stack developer with training as a Web Designer. Experience working on projects with NodeJS, React, Redux, SQL, among other technologies in the sector. I was part of a team of programmers with whom we developed a project where I deployed more in the Front-end, but I feel comfortable working on the Back-end too. I have good skill and poise to work in a team, communicate, acquire new knowledge and judge me in a constructive way to work on my errors and faults.
                </div>
            </div>   
        </div>
    </div>
  )
}

export default About