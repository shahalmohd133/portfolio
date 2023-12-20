import React from 'react';
import '../App.css';
import { HiMenuAlt4 } from "react-icons/hi";
import { VscColorMode } from "react-icons/vsc";
import Banner from './banner';




function Header(){
  return (
    <div className="head">
        <div className="title">
            Cyber World
        </div>
        <div className="mode">
        <VscColorMode />
        </div>
        <div className="menu">
        <HiMenuAlt4 />
        </div>
    </div>
  )
}

export default Header;