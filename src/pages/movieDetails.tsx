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
    <div className='w-full h-screen px-24 flex flex-col justify-start'>
      <div className='flex justify-center py-10 font-bold text-3xl font-oswald text-blue-500'>
        <h1>Movie Info</h1>
      </div>
      <div className='w-full flex flex-col lg:flex-row'>
        <img src={data?.poster} alt="poster" className='h-[400px] md:h-[700px] ' />
        <div className='w-full'>
          <div className='w-full flex justify-center mt-5 lg:mt-0'>
            <h1 className='text-2xl font-bold text-blue-500'>{data?.title}</h1>
          </div>
          {/* Ticket details below */}
          <div className='wrapper  w-full flex flex-col lg:flex-row justify-evenly px-10'>
            <div className='available-tickets flex flex-col '>
              <h2 className='text-2xl font-semibold font-oswald flex justify-center text-center mt-5 lg:mt-0 text-blue-500'>Live Tickets Available </h2>
              <h1 className='flex justify-center mt-5 text-2xl'>{data?.ticketDetails.qty}</h1>
            </div>

            <div className='available-tickets flex flex-col mt-5 lg:mt-0 '>
              <h2 className='text-2xl font-semibold font-oswald flex justify-center text-blue-500'>Sold Tickets </h2>
              <h1 className='flex justify-center mt-5 text-2xl'>{data?.ticketDetails?.sold}</h1>
            </div>
          </div>          
        </div>
          
      </div>
    </div>
  )
}

export default MovieDetails;