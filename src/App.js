
import './App.css';
import   Header from './components/header/'
import Hero from './components/hero'
import { useState } from 'react'
import MainButton from './components/Utils/Button'
import Card from './components/features'
import Food from './components/food2'
import Beergarden from './components/beergarden';
import Location from './components/location'
import Divider from '@mui/material/Divider';
import Footer from './components/footer'

function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      
     <Header toggle={toggle}/>
  
     <Hero/>
     <Card/>
    <Food/>
    <Beergarden/>
     <Divider sx={{marginTop:'2rem'}} />
    <Location/>
     <Divider />
  <Footer/>
     {/*
     features - 3 cards food events beergardern
     food -  carsole card on 1 side with tuseday night thursday night sunday speicals, blurb on otherside about food with button to book 
     events - 
     location - googlemaps iframe  
     footer - same color as heading with title logo address and socals 
     */}

    </div>
  );
}

export default App;
