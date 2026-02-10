import {useNavigate} from "react-router-dom";

import ContactIcon from "../assets/icons/ContactIcon.jsx";
import AboutIcon from "../assets/icons/AboutIcon.jsx";
import HomeIcon from "../assets/icons/HomeIcon.jsx";

function MenuBar() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-32px flex justify-center-safe bg-[#d4d2d2] dark:bg-[#111111] space">
            <div className="flex items-center">
                <div className="HOME-BUTTON"
                     onClick={() => navigate("/")}
                >
                    <HomeIcon/>
                </div>
                <span className="ml-1">Ember</span>
            </div>

            <div className="flex items-center space-4">
                <div className="flex items-center mx"
                     onClick={() => navigate("/contact")}
                >
                    <span className="ml-1">Contact</span>
                    <ContactIcon/>
                </div>
                <div className="flex items-center"
                     onClick={() => navigate("/about")}
                >
                    <span className="ml-1">About me</span>
                    <AboutIcon/>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
