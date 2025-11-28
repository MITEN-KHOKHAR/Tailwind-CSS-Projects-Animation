import React from 'react';
import './App.css'
import Slider from './Componets/Slider';
import FreshFruitJuices from './Componets/FreshFruitJuice';
import BeverageDrinkCard from './Componets/BeverageDrinkCard';
import BigDealsTheWeek from './Componets/BigDealsTheWeek';
import DetoxSmoothie from './Componets/DetoxSmoothie';
import UpcomingOurBeverage from './Componets/UpcomingOurBeverage';
import TestimonialSection from './Componets/TestimonialSection';
import FruitSomeBlog from './Componets/FruitSomeBlog';
import DrinkGallery from './Componets/DrinkGallary';
import Footer from './Componets/Footer';

function App() {

  return (
    <>
    <Slider />
    <FreshFruitJuices />
    <BeverageDrinkCard />
    <BigDealsTheWeek />
    <DetoxSmoothie />
    <UpcomingOurBeverage />
    <TestimonialSection />
    <FruitSomeBlog />
    <DrinkGallery />
    <Footer /> 
    </>
  );
}

export default App;