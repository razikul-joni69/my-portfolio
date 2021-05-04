import React from "react";
import { Card } from "react-bootstrap";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import motoFix from '../../../images/motofix.png'
import haatBazar from '../../../images/haatBazar.png'

const Project = () => {
    return (
        <div className="container">
            <NavigationBar />
            <h1 className="mt-5 mb-5 text-center">My recent Works</h1>
            <div className="row  text-dark">
            <div className="col-md-6 mb-3">
                    <Card style={{ width: "100%"}}>
                        <Card.Img style={{ height: "300px"}} variant="top" src={motoFix} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://motofix-d0a7a.web.app"
                                className="btn btn-warning"
                            >
                                Live Site
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="sdf" className="btn btn-warning ml-2">
                                Source Code
                            </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card style={{ width: "100%" }}>
                        <Card.Img style={{ height: "300px"}} variant="top" src={haatBazar} />
                        <Card.Body>
                            <Card.Title>Haat Bazar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://motofix-d0a7a.web.app"
                                className="btn btn-warning"
                            >
                                Live Site
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="htt" className="btn btn-warning ml-2">
                                Source Code
                            </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card style={{ width: "100%" }}>
                        <Card.Img style={{ height: "300px"}} variant="top" src={haatBazar} />
                        <Card.Body>
                            <Card.Title>Haat Bazar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://motofix-d0a7a.web.app"
                                className="btn btn-warning"
                            >
                                Live Site
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="htt" className="btn btn-warning ml-2">
                                Source Code
                            </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card style={{ width: "100%" }}>
                        <Card.Img style={{ height: "300px"}} variant="top" src={haatBazar} />
                        <Card.Body>
                            <Card.Title>Haat Bazar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://motofix-d0a7a.web.app"
                                className="btn btn-warning"
                            >
                                Live Site
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="htt" className="btn btn-warning ml-2">
                                Source Code
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Project;
