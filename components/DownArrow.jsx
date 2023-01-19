import React from "react";
import Down from "../public/img/arrow-down.svg";

export default function DownArrow({href}) {
  return (
    <a className="downButton" href={href}>
      <Down />
    </a> 
  );
}