import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Phi Sigma Kappa</h1>
        <h3>Church</h3>
      </div>
      <img
        src="/church.jpg"
        alt="hero-image"
        className="hero-image"
        style={{ transform: `translateY(-${offsetY * 2}px)` }} /* Adjust the scrolling speed */
      />
    </section>
  );
}

export default Hero;
