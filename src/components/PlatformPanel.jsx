/* eslint-disable no-unused-vars */
function PlatformPanel({IconComponent, icon_alt, platform_text, platform_user, button_link, button_text}) {
    return (
        <div className="PANEL-WRAPPER">
            <div className="ICON-WRAPPER">
                <IconComponent
                    aria-label={icon_alt}
                    className="w-10 h-10 text-gray-800 dark:text-white transition-transform duration-200 hover:scale-110"
                />
            </div>
            <div className="TEXT-WRAPPER">
                <h3>{platform_text}</h3>
                <p>{platform_user}</p>
            </div>
            <div className="BUTTON-WRAPPER">
                <button
                    type="button"
                    onClick={() => window.open(button_link, '_blank', 'noopener,noreferrer')}
                >
                    {button_text}
                </button>
            </div>
        </div>
    )
}


export default PlatformPanel