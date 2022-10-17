import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

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
        <nav className="mr-4 flex items-center gap-x-4 whitespace-nowrap text-center text-xs text-white">
          <div className="link">
            <p>Hello User</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center gap-x-1">
            <span className="absolute top-0 -right-1 h-4 w-4 rounded-full bg-yellow-400 text-center text-xs font-bold text-white md:right-8">
              2
            </span>
            <ShoppingCartIcon className="w-8" />
            <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
              Cart
            </p>
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-x-10 bg-[#232F3E] p-2 pl-4">
        <p className="link flex items-center gap-x-1">
          <Bars3Icon className="w-6 text-gray-600" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Groceries</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}
