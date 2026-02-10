import SoftwareImage from '../assets/images/software.png'
import HardwareImage from '../assets/images/hardware.png'

import SubPagePanel from "../components/SubPagePanel.jsx";
import MenuBar from "../components/MenuBar.jsx";

function Home() {
    return (
        <div>
            <MenuBar />
            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 md:grid-rows-[50vh_25vh_25vh]">
                <SubPagePanel image_file={SoftwareImage} title="Software projects" description="View my software projects!" link="/software" button_text="See software projects"/>
                <SubPagePanel image_file={HardwareImage} title="Hardware projects" description="View my hardware projects!" link="/hardware" button_text="See hardware projects"/>
                <SubPagePanel title="Contact" description="See my contact info!" link="/contact" button_text="Contact me"/>
                <SubPagePanel title="Credits" description="See site credits!" link="/credits" button_text="See credits"/>
                <div className="col-span-2">
                    <SubPagePanel title="About me" description="See info about me!" link="/about" button_text="Learn about me"/>
                </div>

            </div>
        </div>
    )
}

export default Home