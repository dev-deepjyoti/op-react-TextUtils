import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "New Text"; - Wrong way to change text
  //   setText("new Text"); Correct way to set text using function

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "Success");
  };

  const handleCopytoClipboard = () => {
    const newText = text;
    navigator.clipboard.writeText(newText);
    props.showAlert("Copied to clipboard!", "Info");
  };

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "Success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text cleared", "Info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="my-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              background: props.mode === "light" ? "white" : "#222e38",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-sm btn-primary mx-2 my-2"
          onClick={handleUpClick}
          disabled={text === ""}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-sm btn-primary mx-2 my-2"
          onClick={handleLoClick}
          disabled={text === ""}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-sm btn-primary mx-2 my-2"
          onClick={handleCopytoClipboard}
          disabled={text === ""}
        >
          Copy Text
        </button>
        <button
          className="btn btn-sm btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
          disabled={text === ""}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-sm btn-primary mx-2 my-2"
          onClick={handleClearText}
          disabled={text === ""}
        >
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3 className="my-3">Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          &nbsp;words&nbsp;and&nbsp;
          {text.length} characters |&nbsp;
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <p></p>
        <h4 className="my-2">Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
