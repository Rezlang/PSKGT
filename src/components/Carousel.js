import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function DynamicCarousel({ slides }) {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>{slide.header}</h3>
            <p>{slide.paragraph}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DynamicCarousel;