import "./About.css";
import Image from "../../assets/test-avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello there! I'm <b>Akash Murugesh</b>, a passionate Android app developer, 
                        UI/UX designer, and illustrator. Here, you'll find a showcase of my 
                        creative journey, from crafting engaging mobile experiences to bringing 
                        design concepts to life. <br/><br/> So, whether you're a fellow developer, a 
                        design enthusiast, or just curious about what I do, join me on this 
                        exciting ride.
                        </p>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Android Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Illustration</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage illustration"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
}

export default About;