import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function CustomNavLink({to, style, children, custom}){
    const location = useLocation();
    const elemStyle = style(to, location);
    console.log(to, location)
    if (custom) {
        return <Link to={to} style={elemStyle}>{children}</Link>
    }
    return <NavLink to={to} style={style}>{children}</NavLink>
}

export default CustomNavLink;