import React from 'react'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#16143a] text-gray-300 overflow-x-auto">
        {/* Container */}
        <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-lime-500">Skills</p>
                <p className=" py-4">// These are the technologies I've worked with.</p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src="https://icongr.am/devicon/html5-original-wordmark.svg?size=60&color=30494f" alt="html" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src="https://icongr.am/devicon/css3-original-wordmark.svg?size=60&color=30494f" alt="css" />
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-15 mx-auto my-4" src="https://icongr.am/devicon/javascript-original.svg?size=60&color=currentColor" alt="js" />
                    <p className="my-4">JS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src="https://icongr.am/devicon/react-original-wordmark.svg?size=60&color=30494f" alt="react" />
                    <p className="my-4">REACT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />
                    <p className="my-4">REDUX</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4" src="https://icongr.am/devicon/express-original-wordmark.svg?size=60&color=30494f" alt="express" />
                    <p className="my-4">EXPRESS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4" src="https://icongr.am/devicon/nodejs-original-wordmark.svg?size=60&color=30494f" alt="node" />
                    <p className="my-4">NODE</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4" src="https://icongr.am/devicon/sequelize-original-wordmark.svg?size=60&color=30494f" alt="sequelize" />
                    <p className="my-4">SEQUELIZE</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4"  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" />
                    <p className="my-4">BOOTSTRAP</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4" src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=60&color=30494f" alt="postgres" />
                    <p className="my-4">POSTGRES</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4" src="https://icongr.am/devicon/git-original-wordmark.svg?size=60&color=30494f" alt="git" />
                    <p className="my-4">GIT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto my-4" src="https://icongr.am/devicon/github-original.svg?size=128&color=3d3d3d" alt="github" />
                    <p className="my-4">GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills