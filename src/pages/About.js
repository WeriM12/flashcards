import Footer from "../components/Footer";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import SideMainContainer from "../components/SideMainContainer";
import '../styles/components/pages-styles/About.scss';

function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>What can I say...</p>
            <p>I'm just a chill girl</p>
            <img src="/images/justachillgirl.png"/>
        </div>
        
    )
}

export default About;