import React from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";

const Contact = () => {
    return (
        <>
            <NavigationBar />
            <div className="row mt-5">
                <div className="col-md-6">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <small id="emailHelp" class="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Subject</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                Message
                            </label>
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Send Email
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <iframe title="google map"
                        style={{ width: "100%", height: "500px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703953085!2d90.27923830451422!3d23.780573256586983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1619937055677!5m2!1sen!2sbd"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;
