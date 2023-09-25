import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Movie } from '@/pages';
import Link from 'next/link';
import { useMovieContext } from '@/context/MovieContext';
import { Spinner } from 'evergreen-ui';


const NowShowing = () => {
    const [movies,setMovies] = useState<Movie[]>([])
    const getMovies = async () =>{
     await axios.get('https://ticketreservationserver-production.up.railway.app/movies')
    .then(function (response) {
      // handle success
      setMovies(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    };
  
   
    useEffect(() => {
      if(movies.length == 0){
        getMovies();
      }
      console.log(movies)
  
    })
    
    // console.log(movies);

    const {movie,updateMovie} = useMovieContext()
    while (movies.length == 0) {
      return (<div className='flex justify-center'>
          <Spinner></Spinner>
        </div>)
    }
  
  return (
    <div className='w-full py-10 px-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5  '>
                  {
                    movies.map(movie =>{
                      if(movie.status == "showing"){
                        return (
                       
                          <Link href={'/movieDetails'} key={movie?._id} onClick={()=>{
                               updateMovie(movie);
                           
                          }}>
                             <div  className='h-full bg-slate-100 w-full p-4 rounded-md shadow-lg'>
                                 <img src={movie.poster} alt="jj" className=''/>
                                 <h1 className='text-black'>{movie?.title}</h1>
                             </div>
                          </Link>
                
                 )
                      }
                     
                    })
                  }
                </div>
  )
}

export default NowShowing