import { Fragment } from "react";
import Link from "next/link";
import logo from '../../../public/silverbird-cinemas.svg'
import Image from "next/image";
import { useState } from "react";
import { Pane, SideSheet } from "evergreen-ui";
import css from "styled-jsx/css";

const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);

  function ToggleMenu(){
    setShowMenu(showmenu => !showMenu)
  }
  return (
        <header className="navbar bg-gray-100 sticky text-slate-800  top-0 w-full px-10 py-3 md:px-24 md:py-5 flex justify-between">
        <Link href={'/'} className="hover:font-normal ">
           <Image src={logo} alt="Silverbird Cinemas" className="h-[50px] w-[100px] "></Image>
        </Link>
        {/*Desktop Menu */}
        <div className="desktop-menu hidden md:hidden lg:flex w-[50%] lg:space ml-60 text-blue-400 font-oswald font-light pt-3 justify-between">
            <Link href={'/'} className="hover:font-normal hover:border-b-4 hover:border-blue-400 ">Home</Link>
            <Link href={'/showing'} className="hover:font-normal hover:border-b-4 hover:border-blue-400">NowShowing</Link>
            <Link href={'/comingSoon'} className="hover:font-normal hover:border-b-4 hover:border-blue-400">ComingSoon</Link>
            <Link href={'/bookaticket'} className="hover:font-normal hover:border-b-4 hover:border-blue-400">Book_Movie_Ticket</Link>
        </div>

        <button className="h-full lg:hidden bg-gray-100 border-0" onClick={ToggleMenu}>
                    {showMenu ==false ? <span className="text-4xl text-[#0EA5E9] ">&#9776;</span>: <span className="text-4xl text-[#0EA5E9] ">&#10005;</span>}
        </button>



    <SideSheet  isShown={showMenu} onCloseComplete={() => setShowMenu(false)} width={400} preventBodyScrolling= {true}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          background: "#f3f4f6"
        }}
    >
      <Pane backgroundColor='#f3f4f6' height="max-content">
                 <div className=" mt-[100px] flex text-black justify-center  bg-gray-100 z-50 ">
                    <ul className="flex flex-col text-center gap-4 text-[#0EA5E9] ">
                        <Link href='/'   onClick={() => setShowMenu(false)} className="hover:font-normal text-[#0EA5E9]">Home</Link>
                        <Link href='/showing'  onClick={() => setShowMenu(false)} className="hover:font-normal text-[#0EA5E9] ">NowShowing</Link>
                        <Link href='/comingSoon'  onClick={() => setShowMenu(false)} className="hover:font-normal text-[#0EA5E9]">ComingSoon</Link>
                        <Link href='/bookaticket' onClick={() => setShowMenu(false)} className="hover:font-normal text-[#0EA5E9]">Buy Tickets</Link>
                    </ul> 
                </div>
     </Pane>
                
          </SideSheet>
          
       
    </header>

   
    
  );
};
export default Navbar;