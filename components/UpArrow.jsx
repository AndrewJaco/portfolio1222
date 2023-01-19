import React from "react";
import Up from "../public/img/arrow-up.svg";

export default function UpArrow({href}) {
  return (
    <a href={href}>
      <div className="upButton">
        <Up />
      </div>
    </a>
      
  );
}