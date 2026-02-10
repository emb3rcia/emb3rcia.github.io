import {useNavigate} from "react-router-dom";

import ContactIcon from "../assets/icons/ContactIcon.jsx";
import AboutIcon from "../assets/icons/AboutIcon.jsx";
import HomeIcon from "../assets/icons/HomeIcon.jsx";

function MenuBar() {
    const navigate = useNavigate();
//w-full h-32px flex justify-center-safe space
    return (
        <div className="flex h-32 w-full bg-[#d4d2d2] dark:bg-[#111111] ">

            <div className="justify-center h-32 static right-0"
                     onClick={() => navigate("/")}
            >
                <HomeIcon/>
            </div>

            <div className="justify-center">
                <span className="">Ember</span>
            </div>

            <div className="flex space-x-4">
                <div className="flex justify-center space-x-4"
                     onClick={() => navigate("/contact")}
                >
                    <span className="ml-1">Contact</span>
                    <ContactIcon/>
                </div>
                <div className="flex justify-center space-x-4"
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
