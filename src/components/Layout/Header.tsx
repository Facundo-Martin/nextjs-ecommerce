import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
          />
        </div>
      </div>
    </header>
  );
}
