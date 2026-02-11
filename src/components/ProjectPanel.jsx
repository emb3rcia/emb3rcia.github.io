import GitHubIcon from "../assets/icons/GitHubIcon.jsx";

function ProjectPanel({image_file, type, used, title, description, link}) {
    return (
        <div className="flex flex-col border-4 border-[#C4C4C4] dark:border-[#111111] rounded-2xl bg-[#d4d2d2] dark:bg-[#171717] h-full box-content">
            <div className="overflow-hidden">
                <img src={image_file} alt={"Project image"} className="h-40 md:h-56 w-full object-cover rounded-t-2xl"/>
            </div>
            <div className="flex flex-1 flex-col w-full items-center p-3">
                <span className="font-bold text-lg md:text-3xl">
                    {title}
                </span>
                <span className="flex text-sm md:text-2xl grow">
                    {description}
                </span>
            </div>
            <div className="flex text-xs md:text-base justify-center space-x-1">
                <span>
                    {type === 'hardware' ? 'Platform:' : 'Language:'}
                </span>
                <span>
                    {used}
                </span>
            </div>
            <div className="flex flex-none items-center h-1/6 md:h-1/5 w-full p-1">
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
    )
}

export default ProjectPanel