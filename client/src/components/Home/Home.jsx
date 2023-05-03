import React from 'react';
import "./Home.css";
import BookTrail from './BookTrail';
import MeetTeam from './MeetTeam';
import Testimonial from './Testimonial';
import Delivery from './Delivery';
import HomeProducts from './HomeProducts';
import HomeHero from './HomeHero';

const Home = () => {
  return (
    <>
      <HomeHero/>
      <HomeProducts/>
      <Delivery/>
      <Testimonial/>
      <MeetTeam/>
      <BookTrail/>
    </>
  )
}

export default Home