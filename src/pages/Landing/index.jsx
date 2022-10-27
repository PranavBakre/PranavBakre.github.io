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
    }, [intersectionOptions, location]), [])

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
    }, [])

    return (
        <div style={{ color: "white" }}>
            <section id="home" ref={element => elemRef.current["home"] = element} className="page-section">
                <div>
                    <div className="line1">Hi</div>
                    <div className="line2">
                        I'm <span style={{ color: "rgb(235, 192, 134)" }}>{name}</span>
                    </div>
                    <div className="line3">
                        {subtitle}
                    </div>
                    <div style={{paddingTop: "1rem", paddingLeft: 0, marginLeft: 0, fontSize: "1.5rem", display: "flex",gap: "0.8rem"}}>
                        <a  href="https://www.linkedin.com/in/pranav-bakre/" target="_blank"><i
                           className="icon-link fa-brands fa-linkedin-in" style={{color: "white"}}></i></a>
                        <a  href="https://twitter.com/psbakre" target="_blank"><i className="fa-brands fa-twitter icon-link" style={{color: "white"}}></i></a>
                        <a  href="https://github.com/PranavBakre" target="_blank"><i className="fa-brands fa-github icon-link" style={{color: "white"}}></i></a>
                    </div>
                </div>
            </section>
            <section id="about" ref={element => elemRef.current["about"] = element} className="page-section">
                <div>
                    <h1>About Me</h1>
                    <div>
                        I am a geek passionate about web development and software engineering. Love to learn new languages, frameworks and technologies. Always on the lookout for challenging statements and something that intrigues me.
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingTop: "20px" }}>
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
            <section id="experiences" ref={element => elemRef.current["experiences"] = element} className="page-section">
                <div>
                    <h1>Experiences</h1>
                    <div style={{ marginTop: "2rem", padding: "0.5rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "5px" }}>
                        <h3 style={{ marginBottom: "1rem" }}>Frontend Engineer | Growth<span style={{ color: "#3096ff" }}>X</span> Education Labs
                            <div style={{ fontSize: "1rem" }}>(August 2022 - Present)</div></h3>

                        <div>
                            Building the next generation platform for the top Product Managers and Growth Leaders
                        </div>
                        <div style={{ paddingTop: "1rem" }} className="extra-content">
                            GrowthX is a social learning platform for the top 1% leaders. Focused on founders, product & growth functions, we helps smart and highly motivated professionals build an approach towards product growth.
                        </div>
                    </div>
                    <div style={{ marginTop: "2rem", padding: "0.5rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "5px" }}>
                        <h3>Senior Software Engineer & Software Engineer | Apisero Inc.
                            <div style={{ fontSize: "1rem" }}>(May 2021 - August 2022)</div>
                        </h3>

                        <div>
                            Developed complex integration solutions using Anypoint Platform and the Mule Runtime
                        </div>
                        <div style={{ paddingTop: "1rem" }} className="extra-content">
                            Apisero is a premier Mulesoft and Salesforce Consulting Partner providing services to automate, integrate and transform businesses
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" ref={element => elemRef.current["projects"] = element} className="page-section">
                <div style={{ transform: "translate(-32%, -25%)" }}>
                    <h1>Projects</h1>
                    <div style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "5px" }}>
                        <h3>VPPR: A System for Detecting Depression&nbsp;
                            <a href="https://github.com/VPPR" style={{ textDecoration: "none", color: "rgb(235, 192, 134)" }}>
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </h3>
                        <div>
                            A system for detecting whether a person is depressed or not.<span className="extra-content"> The final year project was composed of two major modules</span>
                        </div>
                        <div className="extra-content">
                            1. Checking the depressive state based on a modified PHQ-9 questionnaire
                        </div>
                        <div className="extra-content">
                            2. Estimating the depressive state based on the Heart Rate Variability retrieved from a fitness tracker
                        </div>
                    </div>
                    <div style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "5px" }}>
                        <h3>
                            Green Incubator: An automated greenhouse&nbsp;
                            <a href="https://github.com/rujulwalvekar/IoT-GreenHouse" style={{ textDecoration: "none", color: "rgb(235, 192, 134)" }}>
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </h3>
                        <div>
                            An automated system which would look over plants<span className="extra-content">, It consisted of</span>
                        </div>
                        <div className="extra-content">1. Automatic watering system which would water the plants between a specific time range, if the soil is
                            dry</div>
                        <div className="extra-content">2. Temperature control, to maintain the temperature of the green house</div>
                        <div className="extra-content">3. Providing artificial sunlight to plants when there was absence of light during daytime</div>

                    </div>
                    <div style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "5px" }}>
                        <h3>
                            A Simple Web App in Ktor and React&nbsp;
                            <a href="https://github.com/PranavBakre/A-simple-web-app-in-ktor-and-react" style={{ textDecoration: "none", color: "rgb(235, 192, 134)" }}>
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </h3>
                        <div>A Simple Project Template for creating Full Fledged Web Application with Google Oauth using KTOR, Exposed, MySQL and React JS
                        </div>
                        <div className="extra-content">Basic features:</div>
                        <div className="extra-content">1. Google Oauth Authorization Code Flow</div>
                        <div className="extra-content">
                            2. Ability to add Contact Details, Addresses, etc
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Landing