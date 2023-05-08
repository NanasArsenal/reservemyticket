import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` p-10 h-screen ${inter.className}`}
    >
       <div className=' bg-white w-full
      '>
        <h2 className='font-bold text-xl '>NOW SHOWING</h2>

        <div className='w-full py-10 px-10   bg-slate-100  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 '>
            
        </div>

      </div>
    </main>
  )
}
