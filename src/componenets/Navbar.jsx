import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-slate-800 shadow-lg flex items-center justify-around
         py-3 px-32 fixed top-0 left-0 w-full">
             <Link to="/"> 
             <span className="font-semibold text-lg flex items-center 
             gap-3 text-blue-400" >
                KiddiesSupplies
                </span></Link>
             
             <div className="flex items-center gap-5 text-white">
                <Link to="/"className="py-1 px-3 text-lg font-light text-white 
                hover:text-sky-300 rounded-2x1 hover:bgslate-700
                transition duration-300"> 
             <span className="font-semibold text-lg flex items-center 
             gap-3 text-purple-400" >
                Home
                </span></Link>
                 <Link to="/"className="py-1 px-3 text-lg font-light text-white 
                hover:text-sky-300 rounded-2x1 hover:bgslate-700
                transition duration-300"> 
             <span className="font-semibold text-lg flex items-center 
             gap-3 text-blue-400" >
                About
                </span></Link>
               
                <Link to="/"className="py-1 px-3 text-lg font-light text-white 
                hover:text-sky-300 rounded-2x1 hover:bgslate-700
                transition duration-300"> 
             <span className="font-semibold text-lg flex items-center 
             gap-3 text-blue-400" >
                Shop
                </span></Link>
                 <Link to="/"className="py-1 px-3 text-lg font-light text-white 
                hover:text-sky-300 rounded-2x1 hover:bgslate-700
                transition duration-300"> 
             <span className="font-semibold text-lg flex items-center 
             gap-3 text-blue-400" >
                Login
                </span></Link>
             </div>
             
             
             
             
             </nav>
    )
}
export default Navbar;