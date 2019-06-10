import React from "react";

function Jumbotron({ children }) {
  return (
    <div 
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center",    boxShadow: "0 3px 6px darkslategrey, 0 3px 6px darkslategrey" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;