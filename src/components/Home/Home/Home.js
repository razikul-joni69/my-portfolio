import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MyImage from "../../../images/myimage1.png";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import "./Home.css";

library.add(fab);

const Home = () => {
    return (
        <div>
            <div className="container">
                <NavigationBar />
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="text">
                                Hi, I'm <br />
                                <span className="text-warning">
                                    Md Razikul Islam Joni
                                </span>
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
                                className="btn btn-warning"
                                href="https://drive.google.com/file/d/1wXpv-yHx0t_LhfIo1tTNuSjQ83oiO8nw/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Show Resume
                            </a>
                            <a
                                className="btn btn-warning ml-2"
                                href="https://drive.google.com/uc?export=download&id=1wXpv-yHx0t_LhfIo1tTNuSjQ83oiO8nw"
                            >
                                Dowhload Resume
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            style={{
                                height: "100%",
                                background: "#18181A",
                                borderRadius: "10px",
                            }}
                            className=" ml-auto"
                            src={MyImage}
                            alt="main images"
                        />
                        {/* <img style={{backgroundImage: "100%"}} className=" ml-auto" src={bg} alt="main images" /> */}
                    </div>
                </div>
                <Work/>
                <Skills />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
