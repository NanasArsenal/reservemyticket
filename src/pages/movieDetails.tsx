import React, { useEffect } from 'react';
import { useMovieContext } from '@/context/MovieContext';
import { useState } from 'react';
import { Movie } from '.';
import { Pane, Dialog } from 'evergreen-ui';


const MovieDetails = () => {
  const {movie, updateMovie} = useMovieContext();
  const [data,setData]= useState<Movie>( {
    "ticketDetails": {
      "qty": 3393,
      "price": 50,
      "sold": 7
    },
    "_id": "650862b4362833916569b467",
    "status": "showing",
    "title": "Ant Man 2024",
    "poster": "https://cdn.marvel.com/content/1x/ant-man_and_the_wasp.png",
    "prologue": "Hope van Dyne (Evangeline Lilly), who is also doing good, reclaiming the family business, and using Pym Particles for global change. ",
    "createdDate": "2023-09-18T14:46:12.985Z",
    "showDate": "23rd december 2023",  });
  const [isShown,setIsShown]=useState<boolean>(false);

  useEffect(() => {
    
    setData(JSON.parse(sessionStorage.getItem('movie') as string))
    console.log('movie',data)

  },[movie])
  console.log('movie',data)



  return (
    <div className='w-full h-full px-24 flex flex-col justify-start'>
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
          <div className='wrapper  w-full flex flex-col lg:flex-row justify-evenly px-10 py-5'>
            <div className='available-tickets flex flex-col '>
              <h2 className='text-2xl font-semibold font-oswald flex justify-center text-center mt-5 lg:mt-0 text-blue-500'>Live Tickets Available </h2>
              <h1 className='flex justify-center mt-5 text-2xl'>{data.ticketDetails.qty > 0 ? data.ticketDetails.qty : "Sold Out"}</h1>
            </div>

            <div className='available-tickets flex flex-col mt-5 lg:mt-0 '>
              <h2 className='text-2xl font-semibold font-oswald flex justify-center text-blue-500'>Sold Tickets </h2>
              <h1 className='flex justify-center mt-5 text-2xl'>{data?.ticketDetails?.sold}</h1>
            </div>

            <div className='available-tickets flex flex-col mt-5 lg:mt-0 '>
              <h2 className='text-2xl font-semibold font-oswald flex justify-center text-blue-500'>Prices </h2>
              <h1 className='flex justify-center mt-5 text-2xl'>£{data?.ticketDetails?.price}</h1>
            </div>
          </div>

          <div className='buy-ticket-button w-full flex justify-center px-10 '>
              <button type="button" className='bg-blue-500 w-full lg:w-[50%] text-white py-4 rounded-md' onClick={() => setIsShown(true)}>Buy Ticket</button>
          </div>          
        </div>
      </div>

      <Pane>
      <Dialog
        isShown={isShown}
        title="Book Ticket"
        containerProps={
          {
            
          }
        }
        onCloseComplete={() => setIsShown(false)}
        hasFooter={false}
        confirmLabel="Custom Label"
      >
        <h1 className='text-blue-500'>Book Ticket</h1>
      </Dialog>
    </Pane>

    </div>
  )
}

export default MovieDetails;