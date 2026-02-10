import websiteImage from "../assets/images/software.png";
import builderImage from "../assets/images/spark-builder.png";
import organizerImage from "../assets/images/spark-organizer.png";
import ProjectPanel from "../components/ProjectPanel.jsx";
import MenuBar from "../components/MenuBar.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function SoftwareProjects() {
    useDocumentTitle("Software | Ember")
    return (
        <>
            <MenuBar />
            <div className="pt-14 px-2">
                <div className="grid grid-cols-3 gap-3 space-y-3">
                    <ProjectPanel
                        image_file={organizerImage}
                        title="spark-organizer"
                        description="Productivity app made with PyQt6."
                        type="software"
                        used="Python"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                    <ProjectPanel
                        image_file={builderImage}
                        title="spark-builder"
                        description="PC building helper app made with PyQt6."
                        type="software"
                        used="Python"
                        link="https://github.com/emb3rcia/spark-builder"
                    />
                    <ProjectPanel
                        image_file={websiteImage}
                        title="Portfolio"
                        description="This site! Built with React and Tailwind."
                        type="software"
                        used="React + Tailwind"
                        link="https://github.com/emb3rcia/emb3rcia.github.io"
                    />
                </div>
            </div>
        </>
    )
}

export default SoftwareProjects