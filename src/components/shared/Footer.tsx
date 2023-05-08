import React,{ReactNode} from 'react'
import Image from 'next/image';
import logo from '../../../public/silverbird-cinemas.svg'


const Footer = () => {
    const d = new Date;
  return (
    <footer className='py-4 w-full  gap-3 bg-gradient-to-b from-slate-100 to-slate-500 text-black bottom-0 md:px-56 mt-5'>
       <div className=' grid grid-cols-1 md:flex gap-20 py-5'>
          <div className=' px-3'>
              <Image src={logo} alt="Silverbird Cinemas" className="h-[80px] w-[200px] my-4 "></Image>
              <div>
                <h2 className=' font-mono  font-extrabold text-llg text-blue-500'>Connect with Us</h2>
                <ul className='text-white '>
                      <li className='font-bold hover:font-normal cursor-pointer '>Facebook</li>
                      <li className='font-bold hover:font-normal cursor-pointer '>Instagram</li>
                      <li className='font-bold hover:font-normal cursor-pointer '>Email</li>
                      <li className='font-bold hover:font-normal cursor-pointer '>Telephone</li>
                </ul>
              </div>
          </div>
          <div className='col-span 1 px-4'>
              <Image src={logo} alt="Silverbird Cinemas" className="h-[80px] w-[150px] my-4 opacity-0 "></Image>
               <h2 className=' font-mono  font-extrabold text-llg text-blue-500'>Contact Us</h2>
               <ul className='text-white '>
                      <li className='font-roboto text-sm font-semibold text-slate-100 cursor-pointer '>Silverbird Galleria, 133, Ahmadu Bello way, VI, Lagos</li>
                      <li className='font-roboto text-sm font-semibold text-slate-100 cursor-pointer '>feedback@silverbirdcinemas.com</li>
                      <li className='font-roboto text-sm font-semibold text-slate-100 cursor-pointer '>+2347012655677</li>
                      <li className='font-roboto text-sm font-semibold text-slate-100 cursor-pointer '>Telephone</li>
                </ul>
          </div>
       </div>
        

        <div className='flex w-full justify-center font-normal text-white text-sm '>
            <p>Developed by NanasArsenal. Copyright {d.getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer