import React from 'react';
import { HeroSection, Services, Partners, Reviews } from '../components/HomeSections';
import Contact from './Contact';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HowToOrder from '../components/HowToOrder';
import BottleCarousel from '../components/BottleCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import NutritionRichWater from '../components/NutritionRichWater';

const Home = () => {
  return (
    <>
      {/* <HeroSection />
        <Services />
        <Partners />
        <Reviews />
        <Contact /> */}
      <Hero />
      <HowToOrder/>
      <NutritionRichWater/>
      <BottleCarousel/>
      <TestimonialSlider/>
    </>

  );
};


export default Home;