import React, { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom";
import "./index.css"
const message = "Pranav Bakre"
const description = "I am a Full Stack Developer"
function Landing() {
    const [name, setName] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const location = useLocation()

    const elemRef = useRef({});

    useEffect(() => {
        if (name.length < message.length) {
            setTimeout(() => {
                setName(message.substring(0, name.length + 1))
            }, 80)
        } else if (subtitle.length < description.length) {
            setTimeout(() => {
                setSubtitle(description.substring(0, subtitle.length + 1))
            }, 50)
        }
    }, [name, subtitle])

    useEffect(() => {
        let elem = elemRef[location.hash.replace("#", "")]
        
        console.log(elem?.offsetTop)
        if (elem) {
            window.scrollTo(0, elem.offsetTop)
        }
    }, [location])

    return (
        <div style={{  width: "100%", color: "white" }}>
            <section id="home" ref={element => elemRef["home"] = element} className="page-section">
                <div>
                    <div className="line1">Hi</div>
                    <div className="line2">
                        I'm <span style={{ color: "rgb(235, 192, 134)" }}>{name}</span>
                    </div>
                    <div className="line3">
                        {subtitle}
                    </div>
                </div>
            </section>
            <section id="about" ref={element => elemRef["about"] = element}  className="page-section">
                    <h1>About Me</h1>
            </section>
        </div>
    )
}

export default Landing