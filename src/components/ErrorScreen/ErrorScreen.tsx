import "./ErrorScreen.css";
import ErrorImage from "../../assets/image/error-image.svg"
import { Link } from 'react-router-dom'

const ErrorScreen = () => {


    return (
        <div className="error__container">
            
            <img src={ErrorImage} alt="404 Page Not Found" className="error__image" />
            
            <h1 className="error__heading">Page Not Found</h1>
            <p className="error__text">The page you are looking for does not exist.</p>
            
            <Link to="/">
                <button className="btn">Take me home</button>
            </Link>
        </div>
    );
}

export default ErrorScreen;