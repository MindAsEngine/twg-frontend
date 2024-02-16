import "./aboutUs.scss"
import aboutUsImg from "../../img/AboutUs.png"
import {handleDragStart} from "../../app/function";

const AboutUs = () => {
    return (
        <div className="bgPr">
            <div className="container m-centr aboutUs flex justif-ss-betw">
                <div className="aboutUs__content">
                    <p className="aboutUs__title fw600 fs40">
                        О нас
                    </p>
                    <p className="aboutUs__text ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                    </p>
                </div>
                <img onDragStart={handleDragStart}
                     className="feature__img"
                     src={aboutUsImg}
                     alt="#"
                     style={{
                         marginLeft: "auto",
                         maxHeight: "425px",
                         maxWidth: "543px",
                         width: "100%",
                         height: "100%",
                     }}/>
            </div>
        </div>
    );
};

export default AboutUs;