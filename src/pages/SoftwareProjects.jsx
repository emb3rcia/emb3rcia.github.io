import sampleImage from "../assets/images/software.png";
import ProjectPanel from "../components/ProjectPanel.jsx";
import MenuBar from "../components/MenuBar.jsx";

function SoftwareProjects() {
    return (
        <>
            <MenuBar />
            <div className="pt-14 px-2">
                <div className="grid grid-cols-3 gap-3 space-y-3">
                    <ProjectPanel
                        image_file={sampleImage}
                        title="spark-organizer"
                        description="Productivity app made with PyQt6."
                        type="software"
                        used="Python"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                    <ProjectPanel
                        image_file={sampleImage}
                        title="spark-builder"
                        description="PC building helper app made with PyQt6."
                        type="software"
                        used="Python"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                    <ProjectPanel
                        image_file={sampleImage}
                        title="Portfolio"
                        description="This site! Built with React and Tailwind."
                        type="software"
                        used="React + Tailwind"
                        link="https://github.com/emb3rcia/spark-organizer"
                    />
                </div>
            </div>
        </>
    )
}

export default SoftwareProjects