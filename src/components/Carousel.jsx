import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Image from 'next/image';
import CarouselImg from './assets/carousel.png';

function CarouselComponent() {
  const items = [
    {
      src: CarouselImg,
      alt: 'carousel-1',
    },
    {
      src: CarouselImg,
      alt: 'carousel-1',
    },
    {
      src: CarouselImg,
      alt: 'carousel-1',
    },
  ];

  const imgStyle = {
    borderRadius: '28px',
  };
  return (
    <Carousel sx={{marginBottom:'41px'}}>
      {items.map((item, idx) => {
        return (
          <Box overflow='hidden' key={idx}>
            <Image src={item.src} key={idx} alt={item.alt} width='100%' height='100%' style={imgStyle} />
          </Box>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
