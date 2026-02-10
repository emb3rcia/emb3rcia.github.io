import sampleImage from "../assets/images/software.png";
import ProjectPanel from "../components/ProjectPanel.jsx";
import MenuBar from "../components/MenuBar.jsx";

function SoftwareProjects() {
    return (
        <div className="SOFTWARE-WRAPPER">
            <MenuBar />
            <ProjectPanel
                image_file={sampleImage}
                title="spark-organizer"
                description="Productivity app made with PyQt6"
                type="software"
                used="Python"
                link="https://github.com/emb3rcia/spark-organizer"
            />
        </div>
    )
}

export default SoftwareProjects