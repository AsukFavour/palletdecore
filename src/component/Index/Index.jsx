import React from 'react';
import Navbar from '../navbar/navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Info from '../Info/Info';
import Cards from '../Card/Cards';
import Special from '../Specials/Specials';
import Grid from '../GridLayout/Grid';
import Footer from '../Footer/Footer';

export default function Index() {
  return (
    <div>
        <Navbar/>
        <Jumbotron/>
        <Info/>
        <Cards/>
        <Special/>
        <Grid/>
        <Footer/>
    </div>
  )
}
