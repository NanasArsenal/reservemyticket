import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { useState, useEffect ,ReactNode} from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })
type Movie ={
  _id: string,
  title:string,
poster:string,
prologue:string,
createdDate:string,
ticketDetails: object,
showDate:string,
}

export default function Home(props:{children: ReactNode}) {
  
  const [movies,setMovies] = useState<Movie[]>([])
  const getMovies = ():void =>{
    axios.get('https://ticketreservationserver-production.up.railway.app/movies')
  .then(function (response) {
    // handle success
    setMovies(response.data);
    console.log(movies);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  };

  useEffect(() => {
    getMovies();
  })
  
  return (
    <main
      className={` p-10 h-screen ${inter.className}`}
    >
       <div className=' w-full h-screen'>
          <h2 className='font-bold text-xl font-roboto'>NOW SHOWING</h2>

          <div className='w-full py-10 px-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5  '>
              {
                movies.map(movie =>{
                  return (
                    <div key={movie?._id} className='h-full bg-slate-100 w-full p-4 '>
                        <img src={movie.poster} alt="jj" className=''/>
                        <h1 className='text-black'>{movie?.title}</h1>
                    </div>
                  )
                })
              }
          </div>

      </div>
    </main>
  )
}
