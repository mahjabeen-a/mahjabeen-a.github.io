import "./Home.css";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/" className="home__social-link" target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.github.com/" className="home__social-link" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/" className="home__social-link" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://www.pinterest.com/" className="home__social-link" target="_blank">
                <i className="fa-brands fa-pinterest"></i>
            </a>
        </div>
    );
}

export default HeaderSocials;