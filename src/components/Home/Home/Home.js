import React from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import MyProjects from "../../Projects/MyProjects/MyProjects";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import HeroSection from "../HeroSection/HeroSection";
import Skills from "../Skills/Skills";
import WhyMe from "../WhyMe/WhyMe";
import Work from "../Work/Work";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <Work />
            <Skills />
            <WhyMe />
            <MyProjects />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
