import { BiSolidCoffee, BiSolidPalette, BiSolidCalendarCheck, BiSolidMeteor } from "react-icons/bi"

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <BiSolidCalendarCheck className="about__icon"/>

                <div>
                    <h3 className="about__title">9</h3>
                    <span className="about__subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about__box">
                <BiSolidMeteor className="about__icon"/>

                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Projects in Progress</span>
                </div>
            </div>

            <div className="about__box">
                <BiSolidPalette className="about__icon"/>

                <div>
                    <h3 className="about__title">144</h3>
                    <span className="about__subtitle">Illustrations Created</span>
                </div>
            </div>

            <div className="about__box">
                <BiSolidCoffee className="about__icon"/>

                <div>
                    <h3 className="about__title">5616</h3>
                    <span className="about__subtitle">Cups of Coffee</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;