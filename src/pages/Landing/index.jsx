import React, { useEffect, useState, useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./index.css"
const message = "Pranav Bakre"
const description = "I am a Full Stack Developer"


const intersectionOptions = {
    threshold: 1
}

function Landing() {
    const [name, setName] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const location = useLocation()
    const navigate = useNavigate()
    const elemRef = useRef({});
    const intersectionObserver = useMemo(() => new IntersectionObserver((entries) => {
        const intersectingEntries = entries.filter(entry => entry.isIntersecting && entry.intersectionRatio < 0.5)
        let intersectionElem = intersectingEntries[0]
        if (intersectionElem && intersectionElem.target.id !== window.location.hash.substring(3)) {
            navigate("#" + intersectionElem.target.id)
        }
    }, [intersectionOptions, location]),[])

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
        let elem = elemRef.current[location.hash.replace("#", "")]
        if (elem) {
            intersectionObserver?.disconnect()
            window.scrollTo(0, elem.offsetTop)
            // elem.scrollIntoView()
            Object.values(elemRef.current).forEach(elem => intersectionObserver?.observe(elem))
        }
    }, [location])
    
    useEffect(() => {
        Object.values(elemRef.current).forEach(elem => intersectionObserver?.observe(elem))

        return () => {
            Object.values(elemRef.current).forEach(elem => intersectionObserver?.unobserve(elem))
        }
    },[])

    return (
        <div style={{ color: "white" }}>
            <section id="home" ref={element => elemRef.current["home"] = element} className="page-section">
                <div>
                    <div className="line1" onClick={() => navigate("#about")}>Hi</div>
                    <div className="line2">
                        I'm <span style={{ color: "rgb(235, 192, 134)" }}>{name}</span>
                    </div>
                    <div className="line3">
                        {subtitle}
                    </div>
                </div>
            </section>
            <section id="about" ref={element => elemRef.current["about"] = element}  className="page-section">
                <div>
                    <h1>About Me</h1>
                    <div>
                    I am a geek passionate about web development and software engineering. Love to learn new languages, frameworks and technologies. Always on the lookout for challenging statements and something that intrigues me.
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing