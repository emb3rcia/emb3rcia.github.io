import PlatformPanel from "../components/PlatformPanel.jsx";
import DiscordIcon from "../assets/icons/DiscordIcon.jsx";
import GitHubIcon from "../assets/icons/GitHubIcon.jsx";
import MenuBar from "../components/MenuBar.jsx";
import MailIcon from "../assets/icons/MailIcon.jsx";

function Contact() {
    return (
        <>
            <MenuBar />
            <div className="pt-14 grid grid-cols-[20vw_20vw_20vw] justify-between p-3 grid-rows-[40vh]">
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
                    IconComponent={MailIcon}
                    icon_alt={"E-Mail"}
                    platform_text={"E-Mail"}
                    platform_user={"sixemod@protonmail.com"}
                    button_text={"Write me an e-mail!"}
                    button_link={"mailto:sixemod@protonmail.com"}
                />
            </div>
        </>
    )
}


export default Contact