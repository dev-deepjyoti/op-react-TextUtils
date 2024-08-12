import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}!!</strong>&nbsp;
        {props.alert.msg}
      </div>
    )
  );
}
