import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Movie } from '@/pages';
import Link from 'next/link';


const NowShowing = () => {
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
    async function Wait(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  
    useEffect(() => {
      getMovies();
      Wait();
    })

  
  return (
    <div className='w-full py-10 px-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5  '>
                  {
                    movies.map(movie =>{
                      return (
                       
                               <Link href={'/movieDetails'} key={movie?._id}>
                                  <div  className='h-full bg-slate-100 w-full p-4 rounded-md shadow-lg'>
                                      <img src={movie.poster} alt="jj" className=''/>
                                      <h1 className='text-black'>{movie?.title}</h1>
                                  </div>
                               </Link>
                     
                      )
                    })
                  }
                </div>
  )
}

export default NowShowing