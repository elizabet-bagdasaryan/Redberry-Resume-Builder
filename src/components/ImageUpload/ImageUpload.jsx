import React from "react";
import "./ImageUpload.css";
import Invalid from "../../img/invalid.svg";

export default function ImageUpload(props) {
  const handleChange = (event) => {
    const f = event.target.files[0];
    if (f) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        const contents = evt.target.result;
        props.onChange({ name: f.name, contents });
      };
      reader.readAsDataURL(f);
    }
  };

  return (
    <div className="photo">
      <p>პირადი ფოტოს ატვირთვა</p>
      <input
        type="file"
        id="image"
        style={{ display: "none" }}
        onChange={handleChange}
        accept="image/*"
      />
      <label htmlFor="image" style={{ margin: 0 }}>
        ატვირთვა
      </label>
      {props.imageError && (
        <img
          src={Invalid}
          alt="wrong"
          className="error-image"
          style={{
            position: "relative",
            top: "3px",
            margin: "0px",
            marginLeft: "15px",
          }}
        />
      )}
    </div>
  );
}
