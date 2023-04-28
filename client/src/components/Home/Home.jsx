import React from 'react';
import "./Home.css";
import BookTrail from './BookTrail';
import MeetTeam from './MeetTeam';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <>
      <Testimonial/>
      <MeetTeam/>
      <BookTrail/>
    </>
  )
}

export default Home