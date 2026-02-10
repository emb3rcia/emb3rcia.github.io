import MenuBar from "../components/MenuBar.jsx";

function Credits() {
    return (
        <>
            <MenuBar />
            <div className="pt-14">
                Icons used in this portfolio are provided by{' '}
                <a
                    href="https://flowbite.com/icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 dark:text-zinc-500"
                >
                    Flowbite
                </a>
                .<br />
                Licensed under the MIT License.<br />
                A copy of the MIT License is included in this project’s licenses directory.
            </div>
        </>
    )
}


export default Credits