import React from "react";
import MyImage from "../../../images/myimage1.png";
import bg from "../../../images/bg.png";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Skills from "../Skills/Skills";
const Home = () => {
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1>
                            Hi, I'm <br />
                            <span className="text-warning">
                            Md Razikul Islam Joni
                            </span>
                        </h1>
                        <h3>
                            A passionate Full Stack Web Developer 🚀 having
                            an experience of building Web 
                            applications with JavaScript / Reactjs / Nodejs /
                            React Native and some other cool libraries and
                            frameworks.
                        </h3>

                        

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
                    <img style={{height: "100%", background: "#18181A", borderRadius: "10px"}} className=" ml-auto" src={MyImage} alt="main images" />
                    {/* <img style={{backgroundImage: "100%"}} className=" ml-auto" src={bg} alt="main images" /> */}
                </div>
            </div>
            <Skills/>
        </div>
    );
};

export default Home;
