import React from "react"
// import { NavLink } from "react-router-dom";
import NavLink from "components/CustomNavLink";
import "./index.css"

const buttonStyle = (to, location) => ({textDecoration: "none",
padding: "1rem 2rem", color: "inherit", ...((to === location.hash) && {backgroundColor: "rgba(255,255,255,0.1)"})})

const homeButtonStyle = (to, location) => ({textDecoration: "none",
padding: "1rem 2rem", color: "inherit", ...((to === location.hash || location.hash === "") && {backgroundColor: "rgba(255,255,255,0.1)"})})
export function Header (){
    return (
        <div className="header-style">
            <NavLink to={"#home"} style={homeButtonStyle} custom >Home</NavLink>
            <NavLink to={"#about"} style={buttonStyle} custom >About</NavLink>
            <NavLink to={"#experiences"} style={buttonStyle} custom >Experience</NavLink>
        </div>
    )
}