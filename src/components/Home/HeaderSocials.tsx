import "./Home.css";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://instagram.com/voxelwhizz?igshid=dzlhZXAxODE2czI4" className="home__social-link" target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://github.com/akashMurugesh" className="home__social-link" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/akashmurugesh" className="home__social-link" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://www.pinterest.com/" className="home__social-link" target="_blank">
                <i className="fa-brands fa-pinterest"></i>
            </a>
        </div>
    );
}

export default HeaderSocials;