import {useNavigate} from "react-router-dom";

function SubPagePanel({ image_file, title, description, link, button_text}) {
    const navigate = useNavigate();

    return (
        <div className="border-2 rounded-2xl m-5 gap-6 bg-[#d4d2d2] dark:bg-[#171717]">
            <div className="flex">
                {image_file ? (
                    <div className="flex-1 min-h-0 items">
                        <img src={image_file} alt="SubPage image" className="h-full w-full object-contain" />
                    </div>
                ) : null}
                <div className="w-1/2">
                    <div className="CONTENTS">
                        <span className="TITLE-NAME">{title}</span>
                        <br/>
                        <span className="DESCRIPTION">{description}</span>
                    </div>

                    <div className="ACTIONS">
                        <button
                            className="BUTTON-WRAPPER"
                            type="button"
                            onClick={() => navigate(link)}
                        >
                            {button_text}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubPagePanel;
