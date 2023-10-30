import React, { useEffect } from 'react';
import { useMovieContext } from '@/context/MovieContext';
import { useState } from 'react';
import { Movie } from '.';
import { Pane, Dialog, SelectField, TextInput, Button} from 'evergreen-ui';
import axios from 'axios';
import Swal from 'sweetalert2';


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
  // const [payload ,setPayload] = useState({
  //   _id: data._id,
  //   quantityPurchased: 0,
  //   email:"",
  //   phoneNumber:"",
  //   viewDate:"",
  //   viewTime:""}
  //  )
  const [phoneNumber, setPhoneNumber]=  useState<String>("");
  const [email,setEmail]= useState<String>("");
  const [quantityPurchased, setQuantityPurchased] = useState(0);
  const [viewDate,setViewDate] = useState<String>("");
  const [viewTime, setViewTime] = useState<String>("");

  const BookTicket = (payload:any)=>{
    axios.post('https://ticketreservationserver-production.up.railway.app/bookings', payload).then((res)=>{
      console.log(res);
      if(res.status == 200){
        Swal.fire(
          'Great News!!',
          'Your ticket has been booked successfully',
          'success'
        );

        setIsShown(!isShown);
      }
    }).catch((error)=>{
      console.log(error);
    })

  }


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
        width={"60%"}
        title="Book Ticket"
        containerProps={
          {
            
          }
        }
        onCloseComplete={() => setIsShown(false)}
        hasFooter={false}
        confirmLabel="Custom Label"
        
      >
        
        <form action="" className=' justify-evenly h-full py-3'>
          <div className='input-wrapper grid grid-cols-1 md:grid-cols-2  gap-2 text-blue-400 text-sm'>
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <TextInput name="text-input-name"  placeholder="Email" className='w-fit' onChange={(e:any)=>{
                  setEmail( e.target.value)  
                  console.log(e.currentTarget.value);
                }}/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="email">Phone Number</label>
                <TextInput name="text-input-name"  placeholder="phone" className='w-fit' onChange={(e:any)=>{
                  setPhoneNumber( e.target.value)  
                  console.log(e.currentTarget.value);
                }}/>
              </div>
            
              <div className='flex flex-col'>
                <label htmlFor="email">Number of Tickets</label>
                <TextInput name="text-input-name" type='number' placeholder="Number of tickets" className='w-fit' onChange={(e:any)=>{
                  setQuantityPurchased(e.target.value)  
                  console.log(e.currentTarget.value);
                }}/>
              </div>

              <div className='flex flex-col'>
                  <label htmlFor="view-date">View Date</label>
                  <TextInput name="date" type='date' onChange={(e:any)=>{
                    setViewDate(e.target.value);
                    console.log(e.target.value)
                  }} />
              </div>
              
              <div className='flex flex-col'>
                <label htmlFor="view-time">Choose View Time</label>
                <SelectField
                  width={280}
                  onChange={(e:any)=>{
                    setViewTime(e.target.value)
                    console.log(e.target.value);
                  }}
                >
                  <option value={""} selected>
                    Select
                  </option>
                  <option value={"5:00pm"} >
                    5:00pm
                  </option>
                  <option value="7:00pm">
                    7:00pm
                  </option>
                  <option value="9:00pm">
                    9:00pm
                  </option>
                  <option value="11:00pm">
                    11:00pm
                  </option>
                </SelectField>
              </div>
              
          </div>
          

          <div className='w-full flex justify-center'>
            <Button appearance='primary' width={240} onClick={(e:React.MouseEvent) =>{
              e.preventDefault()
              BookTicket({
                _id: data._id,
                email: email,
                quantityPurchased: quantityPurchased,
                phoneNumber: phoneNumber,
                viewDate: viewDate,
                viewTime: viewTime,
              })
              }}>Book</Button>
          </div>
        </form>
      </Dialog>
    </Pane>

    </div>
  )
}

export default MovieDetails;