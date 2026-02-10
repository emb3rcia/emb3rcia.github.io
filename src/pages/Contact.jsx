import PlatformPanel from "../components/PlatformPanel.jsx";
import DiscordIcon from "../assets/icons/DiscordIcon.jsx";
import GitHubIcon from "../assets/icons/GitHubIcon.jsx";
import MenuBar from "../components/MenuBar.jsx";

function Contact() {
    return (
        <div className="CONTACT-WRAPPER">
            <MenuBar />
            <PlatformPanel
                IconComponent={DiscordIcon}
                icon_alt={"Discord"}
                platform_text={"Discord"}
                platform_user={"emb3rcia"}
                button_text={"Add me on discord!"}
                button_link={"https://discord.com/users/775292517637554206"}
            />
            <PlatformPanel
                IconComponent={GitHubIcon}
                icon_alt={"GitHub"}
                platform_text={"GitHub"}
                platform_user={"emb3rcia"}
                button_text={"See my GitHub profile!"}
                button_link={"https://github.com/emb3rcia"}
            />
            <PlatformPanel
                IconComponent={GitHubIcon}
                icon_alt={"E-Mail"}
                platform_text={"E-Mail"}
                platform_user={"sixemod@protonmail.com"}
                button_text={"Write me an e-mail!"}
                button_link={"mailto:sixemod@protonmail.com"}
            />
        </div>
    )
}


export default Contact