import React from "react";
import codeing from "../../../images/codeing-animation.gif";

const Work = () => {
    return (
        <div className="mt-5 mb-5">
            <h1 className="text-center">What I do</h1>

            <div className="row">
                <div className="col-md-6">
                    <img src={codeing} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div class="react-reveal ">
                        <p
                            class="subTitle skills-text"
                            style={{ color: "rgb(141, 141, 141)" }}
                        >
                            ⚡ Building responsive web front-end using React.
                        </p>
                        <p
                            class="subTitle skills-text"
                            style={{ color: "rgb(141, 141, 141)" }}
                        >
                            ⚡ Developing android/ios apps using Flutter &amp;
                            React Native.
                        </p>
                        <p
                            class="subTitle skills-text"
                            style={{ color: "rgb(141, 141, 141)" }}
                        >
                            ⚡ Creating application back-end in Node.js Express
                            &amp; MongoDB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
