import React, { useEffect } from 'react';
import { useMovieContext } from '@/context/MovieContext';
import { useState } from 'react';
import { Movie } from '.';


const MovieDetails = () => {
  const {movie, updateMovie} = useMovieContext();
  const [data,setData]= useState<Movie>()

  useEffect(() => {
    
    setData(JSON.parse(sessionStorage.getItem('movie') as string))
    console.log('movie',data)

  },[movie])
  console.log('movie',data)



  return (
    <div className='w-full h-screen px-24 py-14 flex justify-center'>
      <div className='w-full flex'>
        <img src={data?.poster} alt="poster" className='h-[400px] md:h-[700px] ' />
        <div className='w-full'>

        </div>
          
      </div>
    </div>
  )
}

export default MovieDetails;