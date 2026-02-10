import MenuBar from "../components/MenuBar.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Credits() {
    useDocumentTitle("Credits | Ember")
    return (
        <>
            <MenuBar />
            <div className="pt-14 px-2">
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
                A copy of the MIT License is included in this project’s licenses directory, available {' '}
                <a
                    href="https://github.com/emb3rcia/emb3rcia.github.io/blob/dev/licenses/mit_license.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 dark:text-zinc-500"
                >
                    here
                </a>
                .
            </div>
        </>
    )
}


export default Credits