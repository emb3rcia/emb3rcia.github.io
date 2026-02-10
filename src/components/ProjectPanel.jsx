import GitHubIcon from "../assets/icons/GitHubIcon.jsx";

function ProjectPanel({image_file, type, used, title, description, link}) {
    return (
        <div className="PLATFORM-WRAPPER">
            <div className="IMAGE-WRAPPER">
                <img src={image_file} alt={"Project image"}/>
                <h3 className={"TITLE-NAME"}>
                    {title}
                </h3>
            </div>
            <div className="CONTENTS">
                <p className="DESCRIPTION">
                    {description}
                </p>
                <div className="META">
                    <span className="TYPE">
                        {type === 'hardware' ? 'Platform: ' : 'Language: '}
                    </span>
                    <span className="USED">
                        {used}
                    </span>
                </div>

            </div>
            <div className="ACTIONS">
                <button className="BUTTON-WRAPPER"
                        type="button"
                        onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                >
                    <GitHubIcon className="w-8 h-8 mr-2 text-gray-800 dark:text-white" aria-label="GitHub" />
                    See project
                </button>
            </div>

        </div>
    )
}

export default ProjectPanel