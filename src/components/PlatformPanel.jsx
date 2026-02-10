function PlatformPanel({icon_file_dark, icon_file_light, icon_alt, platform_text, platform_user, button_link, button_text}) {
    return (
        <div className="PANEL-WRAPPER">
            <div className="ICON-WRAPPER">
                <img className="hidden dark:block" src={icon_file_dark} alt={icon_alt} />
                <img className="block dark:hidden" src={icon_file_light} alt={icon_alt} />
            </div>
            <div className="TEXT-WRAPPER">
                <h3>{platform_text}</h3>
                <p>{platform_user}</p>
            </div>
            <div className="BUTTON-WRAPPER">
                <a href={button_link} target="_blank" rel="noopener noreferrer">
                    {button_text}
                </a>
            </div>
        </div>
    )
}


export default PlatformPanel