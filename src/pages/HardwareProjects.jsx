import stm32Image from "../assets/images/stm32-module.png";
import ProjectPanel from "../components/ProjectPanel.jsx";

function HardwareProjects() {
    return (
        <div className="HARDWARE-WRAPPER">
            <ProjectPanel
                image_file={stm32Image}
                title="STM32 Module/Devboard"
                description="STM32 based module/development board with many goldpins."
                type="hardware"
                used="STM32"
                link="https://github.com/emb3rcia/stm32-module"
            />
        </div>
    )
}

export default HardwareProjects