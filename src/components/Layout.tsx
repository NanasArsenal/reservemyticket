import React, {PropsWithChildren} from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const Layout = ({children}:PropsWithChildren) => {
  return (
    <>
    <Navbar />
     {children}
    <Footer/>
  </>
  )
}

export default Layout