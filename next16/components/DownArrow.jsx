'use client';
import React from "react";
import Image from "next/image";

export default function DownArrow({ href }) {
  return (
    <a className="downButton" href={href}>
      <Image src="/img/arrow-down.svg" alt="Down arrow" width={24} height={24} />
    </a>
  );
}