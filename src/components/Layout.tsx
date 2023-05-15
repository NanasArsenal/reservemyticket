import React, {PropsWithChildren} from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { MovieContextProvider } from '@/context/MovieContext';

const Layout = ({children}:PropsWithChildren) => {
  return (
    <>
    <Navbar />
    <MovieContextProvider>
       {children}
    </MovieContextProvider>  
    <Footer/>
  </>
  )
}

export default Layout