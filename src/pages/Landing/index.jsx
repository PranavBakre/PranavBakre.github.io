import React, { useEffect, useState, useRef, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import scrollTo from "utils/scroll-to";
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
            // window.scrollTo(0, elem.offsetTop)
            scrollTo(elem.offsetTop, () => {
                Object.values(elemRef.current).forEach(elem => intersectionObserver?.observe(elem))
            })
            // elem.scrollIntoView()
            
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
                    <div style={{display: "flex",flexWrap: "wrap",gap: "10px", paddingTop: "20px"}}>
                        <div className="tag">JavaScript</div>
                        <div className="tag">HTML</div>
                        <div className="tag">CSS</div>
                        <div className="tag">React</div>
                        <div className="tag">Redux</div>
                        <div className="tag">Tailwind</div>
                        <div className="tag">Bootstrap</div>
                        <div className="tag">TypeScript</div>
                        <div className="tag">OpenAPI</div>
                        <div className="tag">Next.js</div>
                    </div>
                </div>
            </section>
            <section id="experiences" ref={element => elemRef.current["experiences"] = element}  className="page-section">
            <div>
                    <h1>My Experiences</h1>
                    <h3 style={{marginBottom: "1rem"}}>Frontend Engineer | Growth<span style={{color: "#3096ff"}}>X</span> Education Labs
                    <div style={{fontSize: "1rem"}}>(August 2022 - Present)</div></h3>
                    
                    <div>
                        Building the next generation platform for the top Product Managers and Growth Leaders
                    </div>
                    <div style={{paddingTop: "1rem"}} className="extra-content">
                        GrowthX is a social learning platform for the top 1% leaders. Focused on founders, product & growth functions, we helps smart and highly motivated professionals build an approach towards product growth.
                    </div>
                    <h3 style={{paddingTop: "2rem"}}>Senior Software Engineer & Software Engineer | Apisero Inc.
                    <div style={{fontSize: "1rem"}}>(May 2021 - August 2022)</div>
                    </h3>
                    
                    <div>
                        Developed complex integration solutions using Anypoint Platform and the Mule Runtime
                    </div>
                    <div style={{paddingTop: "1rem"}} className="extra-content">
                        Apisero is a premier Mulesoft and Salesforce Consulting Partner providing services to automate, integrate and transform businesses
                    </div>
                </div>
            </section>
            <section id="projects" ref={element => elemRef.current["projects"] = element}  className="page-section">
                <div>
                    
                </div>
            </section>
        </div>
    )
}

export default Landing