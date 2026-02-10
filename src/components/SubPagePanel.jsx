import {useNavigate} from "react-router-dom";

function SubPagePanel({ image_file, title, description, link, button_text}) {
    const navigate = useNavigate();

    return (
        <div className="PLATFORM-WRAPPER">
            {image_file ? (
                <div className="IMAGE-WRAPPER">
                    <img src={image_file} alt="SubPage image" />
                    <h3 className="TITLE-NAME">{title}</h3>
                </div>
            ) : (
                <h3 className="TITLE-NAME">{title}</h3>
            )}

            <div className="CONTENTS">
                <p className="DESCRIPTION">{description}</p>
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
    );
}

export default SubPagePanel;
