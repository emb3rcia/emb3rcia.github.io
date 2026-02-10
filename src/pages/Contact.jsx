import PlatformPanel from "../components/PlatformPanel.jsx";
import discordDark from "../assets/discord_dark.svg";
import discordLight from "../assets/discord_light.svg";

function Contact() {
    return (
        <div className="CONTACT-WRAPPER">
            <PlatformPanel
                icon_file_dark={discordDark}
                icon_file_light={discordLight}
                icon_alt={"Discord"}
                platform_text={"Discord"}
                platform_user={"emb3rcia"}
                button_text={"Add me on discord!"}
                button_link={"https://discord.com/users/775292517637554206"}
            />
        </div>
    )
}


export default Contact