import GitHubIcon from "../assets/icons/GitHubIcon.jsx";

function ProjectPanel({image_file, type, used, title, description, link}) {
    return (
        <div className="flex flex-col border-4 border-[#C4C4C4] dark:border-[#111111] rounded-2xl bg-[#d4d2d2] dark:bg-[#171717] h-full items-center box-content">
            <div className="flex flex-col h-full w-full">
                <div className="h-2/5 grow overflow-hidden">
                    <img src={image_file} alt={"Project image"} className="h-full w-full object-cover rounded-t-2xl"/>
                </div>
                <div className="flex flex-col grow h-1/5 w-full items-center p-3">
                    <span className="font-bold text-3xl">
                        {title}
                    </span>
                    <span className="flex text-2xl grow">
                        {description}
                    </span>
                </div>
                <div className="flex flex-none h-1/5 items-end justify-center space-x-1">
                    <span className="TYPE">
                        {type === 'hardware' ? 'Platform:' : 'Language:'}
                    </span>
                    <span className="USED">
                        {used}
                    </span>
                </div>
                <div className="flex items-center h-1/5 w-full p-1">
                    <button className="bg-[#C4C4C4] dark:bg-[#111111] w-full h-full rounded-2xl items-center justify-center cursor-pointer"
                            type="button"
                            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                    >
                        <div className="flex items-center justify-center">
                            <GitHubIcon className="w-6 h-6 text-gray-800 dark:text-white" aria-label="GitHub" />
                            See project
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectPanel