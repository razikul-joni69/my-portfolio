import React from "react";
import "./WhyMe.css";
const WhyMe = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">Why Me?</h1>
            <div className="row m-auto">
                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div
                        className="d-flex justify-content-center align-items-center text-center box-container"
                        style={{
                            border: "1px solid rgb(220, 53, 69)",
                            borderRadius: "10px",
                            height: "200px",
                        }}
                    >
                        <div>
                            <img
                                src="https://media.giphy.com/media/PzT0L9xHZAzzoCtWb0/giphy.gif"
                                alt=""
                                style={{ height: "92px", marginBottom: "5px" }}
                            />
                            <h4>Team Worker</h4>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div
                        className="d-flex justify-content-center align-items-center text-center box-container"
                        style={{
                            border: "1px solid rgb(220, 53, 69)",
                            borderRadius: "10px",
                            height: "200px",
                        }}
                    >
                        <div>
                            <img
                                src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
                                alt=""
                                style={{ height: "92px", marginBottom: "5px" }}
                            />
                            <h4>Love to Learning new Technology</h4>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div
                        className="d-flex justify-content-center align-items-center text-center box-container"
                        style={{
                            border: "1px solid rgb(220, 53, 69)",
                            borderRadius: "10px",
                            height: "200px",
                        }}
                    >
                        <div>
                            <img
                                src="https://media.giphy.com/media/EPffed1dXuDbsK86H9/giphy.gif"
                                alt=""
                                style={{ height: "92px", marginBottom: "5px" }}
                            />
                            <h4>Good at Communications</h4>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                    <div
                        className="d-flex justify-content-center align-items-center text-center box-container"
                        style={{
                            border: "1px solid rgb(220, 53, 69)",
                            borderRadius: "10px",
                            height: "200px",
                        }}
                    >
                        <div>
                            <img
                                src="https://media.giphy.com/media/U3Dghss6nJfV5jMHva/giphy.gif"
                                alt=""
                                style={{ height: "92px", marginBottom: "5px" }}
                            />
                            <h4>Creative Design</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMe;
