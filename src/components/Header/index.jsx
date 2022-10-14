import React from "react"
import { NavLink } from "react-router-dom";
import "./index.css"

const buttonStyle = (isActive) => ({textDecoration: "none",
padding: "1rem 2rem", color: "inherit", ...(isActive && {backgroundColor: "rgba(255,255,255,0.1)"})})

export function Header (){
    return (
        <div className="header-style">
            <NavLink to={"/#home"} style={buttonStyle} >Home</NavLink>
            <NavLink to={{pathname: "/", hash: "about"}} style={buttonStyle} >About</NavLink>
        </div>
    )
}