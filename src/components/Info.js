import React from 'react';
import './Info.css';
import InstagramEmbed from './Insta.js';
import DynamicCarousel from './Carousel.js';

function Info() {
  const slides = [
    {
      image: '/church.jpg',
      header: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      image: '/church.jpg',
      header: 'Second slide label',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: '/church.jpg',
      header: 'Third slide label',
      paragraph: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];
  return (
    <section className="info">
      <h2>Information Section</h2>
      <p>Here is some information about the app.</p>
      <InstagramEmbed />
      <div className='carousel-container'>
        <DynamicCarousel slides={slides}/>
      </div>
      

    </section>
  );
}

export default Info;
