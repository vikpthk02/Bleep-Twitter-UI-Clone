import React from "react";
import { useRef } from "react";
import {
    FaRegImage,
    FaRegSmile
} from "react-icons/fa";


const CreateTweet = () => {
    const uploadedImage = useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__img">
                    <img src="/images/profile.jpg" alt="profile img" />
                </div>
                <div className="create__input">
                    <input
                        type="text"
                        className="create__control"
                        placeholder="What's happing?"
                    />
                </div>
            </div>
            <div className="create__second">
                <div className="create__icons">
                    <label htmlFor="upldimg"><FaRegImage className="ic" /></label>
                    <input id="upldimg" type="file" style={{ display: "none" }} accept="image/*" onChange={handleImageUpload} multiple="true" />
                    <label htmlFor="emoji"><FaRegSmile className="ic" /></label>
                    <input className="upldimg" id="emoji" type="file" style={{ display: "none" }} />
                    <div>
                        <img
                            ref={uploadedImage}
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        />
                    </div>
                </div>
                <div className="create__btn">
                    <a href="">Send Post</a>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;
