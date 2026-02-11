import stm32Image from "../assets/images/stm32-module.png";
import turnsignalsImage from "../assets/images/turnsignals.png";
import ProjectPanel from "../components/ProjectPanel.jsx";
import MenuBar from "../components/MenuBar.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function HardwareProjects() {
    useDocumentTitle("Hardware | Ember")
    return (
        <>
            <MenuBar />
            <div className="pt-14 px-2">
                <div className="grid grid-cols-3 gap-3 space-y-3 grid-rows-[90vh]">
                    <ProjectPanel
                        image_file={stm32Image}
                        title="stm32-module"
                        description="STM32-based development board with 60 goldpins."
                        type="hardware"
                        used="STM32"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                    <ProjectPanel
                        image_file={turnsignalsImage}
                        title="turnsignals"
                        description="STM32-based turnsignals for PC steering wheels."
                        type="hardware"
                        used="STM32"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                </div>
            </div>
        </>
    )
}

export default HardwareProjects