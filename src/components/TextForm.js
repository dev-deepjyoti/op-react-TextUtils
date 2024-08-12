import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "New Text"; - Wrong way to change text
  //   setText("new Text"); Correct way to set text using function

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-sm btn-primary mx-2"
          onClick={handleClearText}
          disabled={text === ""}
        >
          Clear
        </button>
      </div>
      <div className="container">
        <h3 className="my-3">Text Summary</h3>
        <label>
          {text === "" ? text.split(" ").length - 1 : text.split(" ").length}{" "}
          &nbsp;words&nbsp;and&nbsp;
          {text.length} characters
        </label>
        <h4 class="my-2">Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
