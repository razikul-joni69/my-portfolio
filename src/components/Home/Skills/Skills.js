import React from "react";
import SkillProgress from "../SkillProgress/SkillProgress";
import "./Skill.css";

const Skills = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">
                My <span className="text-warning "> Skills</span>
            </h1>
            <div className="row">
                <div className="col-md-4">
                    <h2 className="text-center mt-3 topic">Comfortable</h2>
                    <ul className="skills">
                        <h5 className="skill">Html5</h5>
                        <h5 className="skill">Css3</h5>
                        <h5 className="skill">Javascript</h5>
                        <h5 className="skill">ReactJs</h5>
                        <h5 className="skill">React Router</h5>
                        <h5 className="skill">React Bootstrap </h5>
                        <h5 className="skill">MongoDb</h5>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center mt-3 topic">Familiar</h2>
                    <ul className="skills">
                        <h5 className="skill">Scss</h5>
                        <h5 className="skill">Json</h5>
                        <h5 className="skill">Material Ui</h5>
                        <h5 className="skill">ExpressJs</h5>
                        <h5 className="skill">C</h5>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center mt-3 topic">Tools</h2>
                    <ul className="skills">
                        <h5 className="skill">Vs Code</h5>
                        <h5 className="skill">Git</h5>
                        <h5 className="skill">Github</h5>
                        <h5 className="skill">Netlify</h5>
                        <h5 className="skill">Heroku</h5>
                        <h5 className="skill">Firebase </h5>
                    </ul>
                </div>
            </div>
            <SkillProgress/>
        </div>
    );
};

export default Skills;
