import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex items-center bg-[#131921] p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
