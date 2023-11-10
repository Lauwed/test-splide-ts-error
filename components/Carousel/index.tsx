import { Splide, SplideSlide } from '@splidejs/react-splide';

const Carousel = () => {
  return (
    <>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1699536813782-54998ebe0578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1699536813782-54998ebe0578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Carousel;
