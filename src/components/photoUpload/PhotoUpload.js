import { Field, ErrorMessage, useField } from "formik";
import "./style.scss"

import UploadImage from "../../img/uploadimage.svg";
import { useState } from "react";

function UploadedPhoto({ url }) {
    return (
        <div key={url}>
            <label className="photoupload">
                <img className="photoupload__preview" src={url} />
            </label>
        </div>
    )
}

function NewPhotoButton({ name, setFilesList }) {
    return (
        <div>
            <label className="photoupload" style={{cursor: "pointer"}} title="Загрузить изображение">
                <img src={UploadImage} onDragStart={(e) => e.preventDefault()} />
                <Field
                    className="photoupload__input"
                    type="file"
                    multiple
                    id={name}
                    name={name}
                    onChange={(event) => {
                        console.log(Array.from(event.target.files));
                        setFilesList(Array.from(event.target.files));
                        // setFieldValue("files", Array.from(event.target.files));
                    }}
                />
            </label>
            <p className="photoupload__undertext">Загрузить</p>
        </div>
    )
}

export default function PhotoUpload({ name }) {
    const [filesList, setFilesList] = useState([]);
    return (
        <div className="photoupload__wrapper">
            { filesList?.map((obj, index) => <UploadedPhoto key={index} url={URL.createObjectURL(obj)} />) }
            <NewPhotoButton
                name={name}
                setFilesList={setFilesList}
            />
        </div>
    )
}