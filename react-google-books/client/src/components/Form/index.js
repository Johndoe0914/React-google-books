import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input style={{   boxShadow: "0 3px 6px darkslategrey, 0 3px 6px darkslategrey"}} className="form-control" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, boxShadow: "0 3px 6px darkslategrey, 0 3px 6px darkslategrey" }} className="btn btn-success">
      {props.children}
    </button>
  );
}
