import React from "react";
import ContentR from "./ContentR";
import ContentL from "./ContentL";

function Content() {
  return (
    <div className="container-fluid d-lg-flex">
      <div className="col-lg-9">
        <ContentL></ContentL>
      </div>
      <div className="col-lg-3 px-lg-3">
        <ContentR></ContentR>
      </div>
    </div>
  );
}
export default Content;
