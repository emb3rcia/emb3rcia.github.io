import organizerImage from "../assets/images/spark-organizer.png";
import ProjectPanel from "../components/ProjectPanel.jsx";

function SoftwareProjects() {
    return (
        <div className="SOFTWARE-WRAPPER">
            <ProjectPanel
                image_file={organizerImage}
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