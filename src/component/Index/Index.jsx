import React from 'react';
import Navbar from '../TopNavbar/TopNavbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Info from '../Info/Info';
import CardsList from '../Card/CardsList';
import Special from '../Specials/Specials';
import Grid from '../GridLayout/Grid';
import Footer from '../Footer/Footer';

export default function Index() {
  return (
    <div>
        <Navbar/>
        <Jumbotron/>
        <Info/>
        <CardsList/>
        <Special/>
        <Grid/>
        <Footer/>
    </div>
  )
}
