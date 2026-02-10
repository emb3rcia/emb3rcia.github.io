import SoftwareImage from '../assets/images/software.png'
import HardwareImage from '../assets/images/hardware.png'

import SubPagePanel from "../components/SubPagePanel.jsx";
import MenuBar from "../components/MenuBar.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Home() {
    useDocumentTitle("Home | Ember")
    return (
        <div>
            <MenuBar />
            <div className="pt-14 px-2 grid grid-cols-1 md:grid-cols-1 gap-2 md:grid-rows-[45vh_45vh]">
                <SubPagePanel image_file={SoftwareImage} title="Software projects" description="View my software projects!" link="/software" button_text="See software projects"/>
                <SubPagePanel image_file={HardwareImage} title="Hardware projects" description="View my hardware projects!" link="/hardware" button_text="See hardware projects"/>
            </div>
        </div>
    )
}

export default Home