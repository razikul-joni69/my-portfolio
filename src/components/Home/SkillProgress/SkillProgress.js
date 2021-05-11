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
                        now={45}
                        variant="warning"
                        label={"50%"}
                    />
                    <h5>Css</h5>
                    <ProgressBar
                        animated
                        now={45}
                        variant="warning"
                        label={"50%"}
                    />
                    <h5>JavaScript</h5>
                    <ProgressBar
                        animated
                        now={45}
                        variant="danger"
                        label={"50%"}
                    />
                    <h5>React Js</h5>
                    <ProgressBar
                        animated
                        now={45}
                        variant="warning"
                        label={"50%"}
                    />
                    <h5>React-Bootstrap / Bootstrap</h5>
                    <ProgressBar now={45}>
                        <ProgressBar
                            striped
                            variant="success"
                            now={70}
                            label={"70%"}
                            key={1}
                        />
                        <ProgressBar
                            variant="warning"
                            now={90}
                            label={"90%"}
                            key={2}
                        />
                    </ProgressBar>
                    <h5>Node Js</h5>
                    <ProgressBar
                        animated
                        now={45}
                        variant="info"
                        label={"50%"}
                    />
                    <h5>Express Js</h5>
                    <ProgressBar
                        animated
                        now={45}
                        variant="success"
                        label={"50%"}
                    />
                    <h5>MongoDB</h5>
                    <ProgressBar
                        animated
                        now={45}
                        variant="warning"
                        label={"50%"}
                    />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <CircleProgress
                                percentage={70}
                                strokeWidth={8}
                                secondaryColor="#f0f0f0"
                            />
                            <h5 className="pl-3">Communication</h5>
                        </div>
                        <div className="col-sm-6">
                            <CircleProgress
                                percentage={70}
                                strokeWidth={8}
                                secondaryColor="#f0f0f0"
                            />
                            <h5>Team Work</h5>
                        </div>
                        <div className="col-sm-6">
                            <CircleProgress
                                percentage={70}
                                strokeWidth={8}
                                secondaryColor="#f0f0f0"
                            />
                            <h5>Project Management</h5>
                        </div>
                        <div className="col-sm-6">
                            <CircleProgress
                                percentage={70}
                                strokeWidth={8}
                                secondaryColor="#f0f0f0"
                            />
                            <h5>Creativity</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillProgress;
