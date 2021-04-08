import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styled from 'styled-components';

import slide from '../../assets/slide.jpeg';


const Slides = () => {
  const [slide, setSlide] = useState(0);
  const [offset, setOffset] = useState(2);

  const slideDeck = [
    {key: 1, content:
       <Cont>
         <Title>What is it?</Title>
         <ul>
           <List>Three.js renderer</List><br></br>
           <List>Sets the scene for 3D models</List><br></br>
           <List>Can do everything Three.js</List>
         </ul>
       </Cont>
    }, {key: 2, content:
       <Cont>
         <Title>The Good</Title>
         <ul>
           <List>Part of the React eco-system</List><br></br>
           <List>Easy to re-use components</List><br></br>
           <List>A ton of fun libraries to incorporate</List>
         </ul>
       </Cont>
    }, {key: 3, content:
       <Cont>
         <Title>The Bad</Title>
         <ul>
           <List>High upfront learning cost</List><br></br>
           <List>Sparse documentation!</List><br></br>
           <List>Limited examples (compared to Three.js)</List>
         </ul>
       </Cont>
     },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) };
  });

  return (
    <Carousel
    slides={slideDeck}
    goToSlide={slide}
    offsetRadius={offset}
    animationConfig={config.gentle}
  />
  )
};

const Title = styled.h3`
  font-family: Arial, avenier;
  color: white;
  text-align: center;
  margin-top: 25%;
`;
const List = styled.li`
 font-family: Arial, avenier;
 font-size: 1em;
 color: white;
 margin-left: 5%;
`;
const Cont = styled.div`
  height: 100%;
  width: 400px;
  border: 2px solid white;
  border-radius: 10%;
  background-image: url(${slide});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${Cont}:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 10px 10px lightblue;
  }
`;

export default Slides;