import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Body from './Body/Body';
import Header from './Header/Header';
import LastAdded from './LastAdded/LastAdded';

function Home() {
  return (
    <>
    <Navbar />
      <div className='home'>
        <Helmet>
          <title>Ana Sayfa | ALİ TAHA YURDAKUL</title>
        </Helmet>
        <Header />
        <Body />
        <LastAdded />
      </div>
      <Footer />
    </>
  )
}
export default Home;