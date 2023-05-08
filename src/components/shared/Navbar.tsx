import React from "react";
import Link from "next/link";
import logo from '../../../public/silverbird-cinemas.svg'
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="navbar bg-gray-100 sticky text-slate-800  top-0 w-full px-10 py-3 md:px-24 md:py-5 flex">
        <Image src={logo} alt="Silverbird Cinemas" className="h-[50px] w-[100px] "></Image>

        {/*Desktop Menu */}
        <div className="desktop-menu hidden md:flex w-[35%] ml-60 text-blue-400 font-mono font-bold pt-3 justify-between">
            <Link href={'/'} className="hover:font-normal hover:border-b-4 hover:border-blue-400 ">Home</Link>
            <Link href={'/about'} className="hover:font-normal hover:border-b-4 hover:border-blue-400 ">About Us</Link>
            <Link href={'/showing'} className="hover:font-normal hover:border-b-4 hover:border-blue-400">Now Showing</Link>
            <Link href={'/comingSoon'} className="hover:font-normal hover:border-b-4 hover:border-blue-400">Coming Soon</Link>
            <Link href={'/bookaticket'} className="hover:font-normal hover:border-b-4 hover:border-blue-400">Book Movie Ticket</Link>
        </div>
      
    </header>
  );
};
export default Navbar;