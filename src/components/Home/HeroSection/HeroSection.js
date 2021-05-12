import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faDownload,
    faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
import MyImage from "../../../images/myimage1.png";
import ParticleConfig from "../Config/ParticleConfig";
library.add(fab);

const HeroSection = () => {
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute" }}>
                <Particles
                    height="100vh"
                    width="100vw"
                    params={ParticleConfig}
                />
            </div>
            <Container>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="text-warning">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Hi, I'm",
                                            "Md Razikul Islam Joni",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <h1>
                                <span className="text-danger">MERN</span> Stack
                                Developer
                            </h1>
                            <h3>
                                A passionate Full Stack Web Developer 🚀 having
                                an experience of building Web applications with
                                JavaScript / Reactjs / Nodejs / React Native and
                                some other cool libraries and frameworks.
                            </h3>
                            <div className="social-media-container">
                                <a
                                    href="https://github.com/razikul-joni69"
                                    className="icon-button github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className=""
                                        icon={["fab", "github"]}
                                    />

                                    <span></span>
                                </a>
                                <a
                                    href="https://www.facebook.com/razikul.joni69/"
                                    className="icon-button facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "facebook"]}
                                    />

                                    <span></span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/razikul-joni69/"
                                    className="icon-button linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "linkedin"]}
                                    />

                                    <span></span>
                                </a>
                                <a
                                    href="mailto:shakilatik@gmail.com"
                                    className="icon-button google"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={["fab", "google"]} />

                                    <span></span>
                                </a>
                                <a
                                    href="https://github.com/razikul-joni69"
                                    className="icon-button google"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "pinterest"]}
                                    />

                                    <span></span>
                                </a>
                            </div>

                            <a
                                className="btn btn-outline-danger mr-2 mt-2 mb-2"
                                href="https://drive.google.com/file/d/1wXpv-yHx0t_LhfIo1tTNuSjQ83oiO8nw/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="mr-2"
                                    icon={faExternalLinkAlt}
                                ></FontAwesomeIcon>
                                Show Resume
                            </a>
                            <a
                                className="btn btn-outline-danger"
                                href="https://drive.google.com/uc?export=download&id=1wXpv-yHx0t_LhfIo1tTNuSjQ83oiO8nw"
                            >
                                <FontAwesomeIcon
                                    className="mr-1"
                                    icon={faDownload}
                                ></FontAwesomeIcon>{" "}
                                Dowhload Resume
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                                background: "#18181A",
                                borderRadius: "10px",
                            }}
                            className=" ml-auto"
                            src={MyImage}
                            alt="main images"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
