'use client';
import CameraImg from '@/components/assets/category-camera.png';
import HpImg from '@/components/assets/category-hp.png';
import LaptopImg from '@/components/assets/category-laptop.png';
import PcImg from '@/components/assets/category-pc.png';
import StoreImg from '@/components/assets/store.png';
import CarouselComponent from '@/components/Carousel';
import SearchBar from '@/components/SearchBar';
import { Box, Card, CardContent, Link as MuiLink, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

function HomeClient() {
  const contentCard = [
    {
      img: LaptopImg,
      text: 'Laptop',
      alt: 'laptop-image',
      path: '/tanya-teknisi',
    },
    {
      img: PcImg,
      text: 'PC',
      alt: 'PC-image',
      path: '/spare-part',
    },
    {
      img: HpImg,
      text: 'Handphone',
      alt: 'HP-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
  ];

  const dataStore = [
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
    {
      img: StoreImg,
      store: 'pak yos service',
      city: 'Jakarta Selatan',
    },
  ];

  const paperStyle = {
    padding: '8px 24px',
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-beetwen',
  };

  const categoryStyle = {
    padding: '30px 40px',
    backgroundColor: '#C3E9FF',
    borderRadius: '24px',
    marginBottom: '84px',
    marginTop: '41px',
  };

  return (
    <Box paddingTop={'266px'} marginX='auto' maxWidth='1120px'>
      <CarouselComponent />
      <SearchBar />
      <Paper variant='elevation' elevation={3} sx={categoryStyle}>
        <Typography variant='h6' marginBottom='20px' fontWeight='600'>
          Kategori Pilihan
        </Typography>
        <Box display='flex' gap='20px'>
          {contentCard.map((category, idx) => {
            return (
              <Paper variant='elevation' elevation={3} sx={paperStyle} key={idx}>
                <Box width='100%' height='60px'>
                  <Image src={category.img} width='auto' height='auto' alt={category.alt} />
                </Box>
                <Typography variant='h6' fontWeight='600'>
                  {category.text}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Paper>
      <RecomendationStore data={dataStore} />
    </Box>
  );
}

export default HomeClient;

function RecomendationStore({ data }) {
  return (
    <Box marginBottom='98px'>
      <Typography variant='h6' marginBottom='20px' fontWeight='600'>
        Kategori Pilihan
      </Typography>
      <Box display='flex' flexWrap='wrap' gap='38px'>
        {data.map((data, idx) => {
          return (
            <Card component='div' sx={{ width: '22.4%', overflow: 'hidden', borderRadius: '12px' }} variant='outlined' key={idx}>
              <MuiLink component={Link} href={'https://www.tokopedia.com/sepatucompass/compass-velocity-black-36?source=homepage.left_carousel.0.293672'}>
                <Box width='100%' height='180px' position='relative'>
                  <Image src={StoreImg} fill />
                </Box>
              </MuiLink>
              <CardContent component='div' sx={{ display: 'flex', flexDirection: 'column', aligndatas: 'center' }}>
                <MuiLink component={Link} href={'https://www.tokopedia.com/sepatucompass/compass-velocity-black-36?source=homepage.left_carousel.0.293672'} sx={{ color: 'black' }} underline='none'>
                  <Typography variant='h6' textTransform='capitalize' fontWeight='700'>
                    {data.store}
                  </Typography>
                  <Typography variant='body2' textTransform='capitalize'>
                    {data.city}
                  </Typography>
                </MuiLink>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
