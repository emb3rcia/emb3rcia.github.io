import {useNavigate} from "react-router-dom";

function SubPagePanel({ image_file, title, description, link, button_text}) {
    const navigate = useNavigate();

    return (
        <div className="flex border-4 border-[#C4C4C4] dark:border-[#111111] rounded-2xl bg-[#d4d2d2] dark:bg-[#171717] h-full box-border">
            {image_file ? (
                <>
                    <div className="h-full shrink-0 grow-0 w-1/2 overflow-hidden">
                        <img src={image_file} alt="SubPage image" className="h-full w-full object-cover rounded-l-2xl" />
                    </div>
                    <div className="flex flex-col h-full w-1/2 shrink-0">
                        <div className="flex-1 p-2">
                            <span className="font-bold text-xl">{title}</span>
                            <br/>
                            <span className="text-lg">{description}</span>
                        </div>

                        <div className="flex flex-none items-center h-1/5 w-full p-1">
                            <button
                                className="bg-[#C4C4C4] dark:bg-[#111111] w-full h-full rounded-2xl cursor-pointer"
                                type="button"
                                onClick={() => navigate(link)}
                            >
                                {button_text}
                            </button>
                        </div>
                    </div>
                </>
                ) : (
                    <div className="flex flex-col h-full w-full p-2">
                        <div className="flex-1">
                            <span className="font-bold text-xl">{title}</span>
                            <br/>
                            <span className="text-lg">{description}</span>
                        </div>

                        <div className="h-1/3 flex-none justify-center items-center p-1">
                            <button
                                className="dark:bg-[#111111] w-full h-full rounded-2xl"
                                type="button"
                                onClick={() => navigate(link)}
                            >
                                {button_text}
                            </button>
                        </div>
                    </div>
            )}
        </div>
    );
}

export default SubPagePanel;
