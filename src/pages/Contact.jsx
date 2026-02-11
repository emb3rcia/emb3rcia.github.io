import PlatformPanel from "../components/PlatformPanel.jsx";
import DiscordIcon from "../assets/icons/DiscordIcon.jsx";
import GitHubIcon from "../assets/icons/GitHubIcon.jsx";
import MenuBar from "../components/MenuBar.jsx";
import MailIcon from "../assets/icons/MailIcon.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Contact() {
    useDocumentTitle("Contact | Ember")
    return (
        <>
            <MenuBar />
            <div className="pt-14 grid grid-cols-2 gap-3 p-3 auto-rows-[40vh]">
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
                <div className="col-span-2">
                    <PlatformPanel
                    IconComponent={MailIcon}
                    icon_alt={"E-Mail"}
                    platform_text={"E-Mail"}
                    platform_user={"sixemod@protonmail.com"}
                    button_text={"Write me an e-mail!"}
                    button_link={"mailto:sixemod@protonmail.com"}
                    />
                </div>
            </div>
        </>
    )
}


export default Contact