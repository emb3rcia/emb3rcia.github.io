import sampleImage from "../assets/images/hardware.png";
import ProjectPanel from "../components/ProjectPanel.jsx";
import MenuBar from "../components/MenuBar.jsx";

function HardwareProjects() {
    return (
        <>
            <MenuBar />
            <div className="pt-14 px-2">
                <div className="grid grid-cols-3 gap-3 space-y-3">
                    <ProjectPanel
                        image_file={sampleImage}
                        title="stm32-module"
                        description="STM32-based module/development board with 60 goldpins."
                        type="software"
                        used="Python"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                </div>
            </div>
        </>
    )
}

export default HardwareProjects