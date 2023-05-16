import { createContext , useContext, useState, ReactNode} from "react";
import {Movie} from '../pages/index' ;



interface MyContextValue {
    movie: Movie;
    updateMovie: (newData: Movie) => void;
  }

  const initialContextValue: MyContextValue = {
    movie: {
        _id:"",
      title:"",
    poster:"",
    prologue:"string",
    createdDate:"string",
    ticketDetails: {
      qty: 0,
      price: 0
    },
    showDate:"string",
    },
    updateMovie: () => {},
  };

  const MovieContext = createContext(initialContextValue);
  
  // Create a custom hook to access the context value
export const useMovieContext = () => useContext(MovieContext);
  


export const MovieContextProvider = (props:{children: ReactNode}) => {
    const [movie, setMovie] = useState<Movie>({
        _id:"",
      title:"",
    poster:"",
    prologue:"string",
    createdDate:"string",
    ticketDetails: {
      qty: 0,
      price: 0
    },
    showDate:"string",
    });

    const updateMovie = (newData: Movie) => {
        setMovie(newData);
        console.log(newData);
        sessionStorage.setItem('movie', JSON.stringify(newData))
      };

     
    

    return (
        <MovieContext.Provider value={{movie,updateMovie}}>
            {props.children}
        </MovieContext.Provider>
    )
};
