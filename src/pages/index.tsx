import {Suspense} from 'react'
import { Inter } from 'next/font/google';
import {ReactNode} from 'react';
import Loading from '@/loading';
import dynamic from 'next/dynamic'
const NowShowing = dynamic(() => import('../components/nowShowing'), {
    ssr: false,
})
const ComingSoon = dynamic(() => import('../components/comingSoon'), {
  ssr: false,
})
const inter = Inter({ subsets: ['latin'] })

export type Movie ={
  _id: string,
  status: string,
  title:string,
poster:string,
prologue:string,
createdDate:string,
ticketDetails: {
  qty: number,
  price: number,
  sold:number,
},
showDate:string,
}

export default function Home(props:{children: ReactNode}) {
  

  
  return (
      <main
        className={` p-10 h-screen ${inter.className} `}
      >
        <div className=' w-full h-screen'>
            <h2 className='font-bold text-xl font-roboto'>NOW SHOWING</h2>
                <Suspense fallback={<Loading/>}>
                  <NowShowing/>
                </Suspense>
            <h2 className='font-bold text-xl font-roboto'>PREMIEREING SOON</h2>
              <ComingSoon/>

       </div>
      </main>
 
  )
}


