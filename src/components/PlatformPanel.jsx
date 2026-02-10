/* eslint-disable no-unused-vars */
function PlatformPanel({IconComponent, icon_alt, platform_text, platform_user, button_link, button_text}) {
    return (
        <div className="flex flex-col border-4 border-[#C4C4C4] dark:border-[#111111] rounded-2xl bg-[#d4d2d2] dark:bg-[#171717] h-full box-border items-center">
            <div className="w-24 h-24 text-gray-800 dark:text-white">
                <IconComponent
                    aria-label={icon_alt}
                    className="w-24 h-24 text-gray-800 dark:text-white transition-transform duration-200 hover:scale-110"
                />
            </div>
            <div className="flex flex-col grow items-center">
                <span className="font-bold text-3xl">{platform_text}</span>
                <span className="text-2xl">{platform_user}</span>
            </div>
            <div className="flex flex-none items-center h-1/5 w-full p-1">
                <button
                    type="button"
                    onClick={() => window.open(button_link, '_blank', 'noopener,noreferrer')}
                    className="bg-[#C4C4C4] dark:bg-[#111111] bg  w-full h-full rounded-2xl cursor-pointer"
                >
                    {button_text}
                </button>
            </div>
        </div>
    )
}


export default PlatformPanel