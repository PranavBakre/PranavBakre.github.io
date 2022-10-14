import React from "react";
function CustomNavLink({to, style, children}){
    const location = window.location.pathname;
    const isActive = location === to;
    const elemStyle = style(isActive);

    return <a href={to} style={elemStyle}>{children}</a>
}

export default CustomNavLink;