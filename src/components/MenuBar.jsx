import {useNavigate} from "react-router-dom";

import ContactIcon from "../assets/icons/ContactIcon.jsx";
import AboutIcon from "../assets/icons/AboutIcon.jsx";
import HomeIcon from "../assets/icons/HomeIcon.jsx";

function MenuBar() {
    const navigate = useNavigate();

    return (
        <div className="MENU-WRAPPER">
            <div className="HOME-BUTTON"
                 onClick={() => navigate("/")}
            >
                <HomeIcon/>
            </div>
            <span className="SITE-TITLE">Ember</span>
            <div className="CONTACT-BUTTON"
                 onClick={() => navigate("/contact")}
            >
                <span>Contact</span>
                <ContactIcon/>
            </div>
            <div className="ABOUT-BUTTON"
                 onClick={() => navigate("/about")}
            >
                <span>About me</span>
                <AboutIcon/>
            </div>
        </div>
    );
}

export default MenuBar;
