import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../Assets/logo.png"

export default function Navbar(){
    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f3eae8] text-[#000]">
            <div>
                <img src={Logo} alt="Logo Image" style={{width: "200px"}} />
            </div>
            
            {/* menu */}
            <div>
                <ul className="flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hambutton */}
            <div className="hidden">
                <FaBars />
            </div>

            {/* MobMenu */}
            <ul className="hidden">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>

            {/* SocialIcons */}
            <div></div>

        </div>
    )
}