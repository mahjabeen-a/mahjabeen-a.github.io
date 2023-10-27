const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">9</h3>
                    <span className="about__subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cursor"></i>

                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Projects in Progress</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-pencil"></i>

                <div>
                    <h3 className="about__title">144</h3>
                    <span className="about__subtitle">Illustrations Created</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">5616</h3>
                    <span className="about__subtitle">Cups of Coffee</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;