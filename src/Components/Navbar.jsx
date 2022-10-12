import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../Assets/logo.png"
import resume from "../Resume/CVTomásTagliaferriEn.docx.pdf"

const Navbar = () => {

    const [nav, setNav] = useState(false)

    function handleClick(){
        setNav(!nav)
    }

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e8e9f3b1] text-[#fff]">
            <div>
                <img src={Logo} alt="Logo Image" style={{width: "150px"}} />
            </div>
            
            {/* menu */}
                <ul className="hidden md:flex text-lime-500">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>   

            {/* Hambutton */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* MobMenu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#16143a] text-lime-500 flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* SocialIcons */}
            <div className="hidden md:flex fixed flex-col top-80 left-0">
                <ul>
                    <li className="w-40 h-10 flex justify-between items-center -ml-20 hover:-ml-0 duration-300 bg-gray-400 hover:bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300 pr-0" 
                        href="https://www.linkedin.com/in/tomastagliaferri-fullstack/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-10 flex justify-between items-center -ml-20 hover:-ml-0 duration-300 bg-gray-400 hover:bg-gray-800">
                        <a className="flex justify-between items-center w-full text-gray-300 pr-0" 
                        href="https://github.com/TomasTag">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-10 flex justify-between items-center -ml-20 hover:-ml-0 duration-300 bg-gray-400 hover:bg-red-500">
                        <a className="flex justify-between items-center w-full text-gray-300 pr-0" 
                        href="mailto:tomitaglia2000@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-40 h-10 flex justify-between items-center -ml-20 hover:-ml-0 duration-300 bg-gray-400 hover:bg-blue-200">
                        <a className="flex justify-between items-center w-full text-gray-600 pr-0" 
                        href={resume} target="_blank" rel="noopener noreferrer" download="CVTomásTagliaferriEn.docx.pdf">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar