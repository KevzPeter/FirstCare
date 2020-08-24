import React,{useState} from 'react'
import logo from '../svg/logo192.png'
export const Header = () => {
    const [click,setClick]=useState(false)
    return (
        click?<>
        <div className="mainheader">
        <img src={logo} alt="logo"></img>
        <button class="hamburger hamburger--spin is-active" type="button" onClick={()=>setClick(!click)}>
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
    <div className="dropdown">
        <a href="#help">Help</a>
        <a href="#Contact">Contact</a>
    </div>
    </>:
        <div className="mainheader">
            <img src={logo} alt="logo"></img>
            <button class="hamburger hamburger--spin" onClick={()=>setClick(!click)}>
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}