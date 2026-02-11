import {useNavigate} from "react-router-dom";

import ContactIcon from "../assets/icons/ContactIcon.jsx";
import AboutIcon from "../assets/icons/AboutIcon.jsx";
import HomeIcon from "../assets/icons/HomeIcon.jsx";

function MenuBar() {
    const navigate = useNavigate();
    return (
        <div className="fixed flex justify-center h-12 items-center w-full bg-[#d4d2d2] dark:bg-[#111111] dark:text-white">

            <div className="flex absolute left-1 items-center cursor-pointer"
                 onClick={() => navigate("/")}
            >
                <HomeIcon/>
            </div>

            <div className="flex absolute right-1 items-center space-x-2">
                <div className="flex space-x-2 items-center cursor-pointer"
                     onClick={() => navigate("/credits")}
                >
                    <span className="ml-1">Credits</span>
                    <span className="font-bold text-xl md:text-3xl md:pb-1 leading-none">©</span>
                </div>
                <div className="flex space-x-2 cursor-pointer"
                     onClick={() => navigate("/contact")}
                >
                    <span className="ml-1">Contact</span>
                    <ContactIcon/>
                </div>
                <div className="flex space-x-2 cursor-pointer"
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
