import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center gap-x-6 bg-[#131921] p-1 py-2">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={140}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
          <input
            className="h-full flex-1 rounded-l-md px-4 focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <nav className="flex items-center gap-x-4 whitespace-nowrap text-center text-xs text-white">
          <div>
            <p>Hello User</p>
            <p>Account & Lists</p>
          </div>
          <div>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div>
            <p>Cart</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
