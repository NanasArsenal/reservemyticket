import React from 'react'

const booking = () => {
  return (
    <div className='h-screen'>
        <h1 className='font-oswald font-bold w-full flex justify-center py-2 text-blue-500 text-2xl'>Book Movie Ticket</h1>
        <div className='w-full flex justify-center py-5'><input type="text" placeholder='Search the Movie you want to book tickets for.' className='w-[40%] px-4 py-4 rounded-md' autoFocus /> </div>
    </div>
  )
}

export default booking