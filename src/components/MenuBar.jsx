import {useNavigate} from "react-router-dom";

import ContactIcon from "../assets/icons/ContactIcon.jsx";
import AboutIcon from "../assets/icons/AboutIcon.jsx";
import HomeIcon from "../assets/icons/HomeIcon.jsx";

function MenuBar() {
    const navigate = useNavigate();
    return (
        <div className="fixed flex justify-center h-12 items-center w-full bg-[#d4d2d2] dark:bg-[#111111]">

            <div className="absolute left-1"
                 onClick={() => navigate("/")}
            >
                <HomeIcon/>
            </div>

            <span className="">Ember</span>

            <div className="flex absolute right-1">
                <div className="flex space-x-2 "
                     onClick={() => navigate("/contact")}
                >
                    <span className="ml-1">Contact</span>
                    <ContactIcon/>
                </div>
                <div className="flex space-x-2 "
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
