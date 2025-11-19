'use client';
import React from "react";
import Image from "next/image";

export default function UpArrow({ href }) {
  return (
    <a href={href}>
      <div className="upButton">
        <Image src="/img/arrow-up.svg" alt="Up arrow" width={24} height={24} />
      </div>
    </a>

  );
}