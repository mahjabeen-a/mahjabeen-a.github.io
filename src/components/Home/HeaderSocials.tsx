import "./Home.css";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://instagram.com/voxelwhizz?igshid=dzlhZXAxODE2czI4" className="home__social-link" target="_blank">
                <AiFillInstagram size="1.75rem"/>
            </a>

            <a href="https://github.com/akashMurugesh" className="home__social-link" target="_blank">
                <AiFillGithub size="1.75rem"/>
            </a>

            <a href="https://www.linkedin.com/in/akashmurugesh" className="home__social-link" target="_blank">
                <AiFillLinkedin size="1.75rem"/>
            </a>

            <a href="https://www.pinterest.com/" className="home__social-link" target="_blank">
                <BsPinterest size="1.5rem"/>
            </a>
        </div>
    );
}

export default HeaderSocials;