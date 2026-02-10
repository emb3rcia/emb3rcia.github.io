import MenuBar from "../components/MenuBar.jsx";

function Credits() {
    return (
        <div className="CREDITS-WRAPPER">
            <MenuBar />
            Icons used in this portfolio are provided by{' '}
            <a
                href="https://flowbite.com/icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="CLICKABLE-WRAPPER"
            >
                Flowbite
            </a>
            .<br />
            Licensed under the MIT License.<br />
            A copy of the MIT License is included in this project’s licenses section.
        </div>
    )
}


export default Credits