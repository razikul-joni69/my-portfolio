import emailjs from "emailjs-com";
import React from "react";

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ggrfced",
                "template_m180som",
                e.target,
                "user_T3Rej0OAIHjQAPNwyzQbs"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        alert("Mail Sent Successfully");
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your Email Address"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                            />
                            <small id="emailHelp" class="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input
                                name="from_name"
                                type="text"
                                placeholder="Enter Your Name"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Enter Subject"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Enter Your Message Here"
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Send Email
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <iframe
                        title="google map"
                        style={{ width: "100%", height: "500px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703953085!2d90.27923830451422!3d23.780573256586983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1619937055677!5m2!1sen!2sbd"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
