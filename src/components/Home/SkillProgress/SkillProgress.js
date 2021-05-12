import React from "react";
import { ProgressBar } from "react-bootstrap";
import { CircleProgress } from "react-gradient-progress";
const SkillProgress = () => {
    return (
        <div className=" container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h5>Html</h5>
                    <ProgressBar
                        animated
                        now={95}
                        variant="primary"
                        label={"95%"}
                    />
                    <h5>Css</h5>
                    <ProgressBar
                        animated
                        now={90}
                        variant="secondary"
                        label={"90%"}
                    />
                    <h5>JavaScript</h5>
                    <ProgressBar
                        animated
                        now={80}
                        variant="danger"
                        label={"80%"}
                    />
                    <h5>React Js</h5>
                    <ProgressBar
                        animated
                        now={75}
                        variant="muted"
                        label={"75%"}
                    />
                    <h5>React-Bootstrap / Bootstrap</h5>
                    <ProgressBar
                        animated
                        now={80}
                        variant="dark"
                        label={"80%"}
                    />
                    <h5>Node Js</h5>
                    <ProgressBar
                        animated
                        now={50}
                        variant="info"
                        label={"50%"}
                    />
                    <h5>Express Js</h5>
                    <ProgressBar
                        animated
                        now={65}
                        variant="success"
                        label={"65%"}
                    />
                    <h5>MongoDB</h5>
                    <ProgressBar
                        animated
                        now={60}
                        variant="warning"
                        label={"60%"}
                    />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div>
                                <CircleProgress
                                    percentage={70}
                                    strokeWidth={8}
                                    secondaryColor="#f0f0f0"
                                />
                                <h5 className="text-center">Communication</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div>
                                <CircleProgress
                                    percentage={80}
                                    strokeWidth={8}
                                    secondaryColor="#f0f0f0"
                                />
                                <h5 className="text-center">Team Work</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div>
                                <CircleProgress
                                    percentage={75}
                                    strokeWidth={8}
                                    secondaryColor="#f0f0f0"
                                />
                                <h5 className="text-center">
                                    Project Management
                                </h5>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div>
                                <CircleProgress
                                    percentage={70}
                                    strokeWidth={8}
                                    secondaryColor="#f0f0f0"
                                />
                                <h5 className="text-center">Creativity</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillProgress;
