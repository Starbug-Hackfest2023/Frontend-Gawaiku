'use client';

import StoreImg from '@/components/assets/store.png';
import SearchBar from '@/components/SearchBar';
import { Box, Card, CardContent, Link as MuiLink, Pagination, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

function FavoriteStoreClient() {
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
  ];

  return (
    <Paper sx={{ flex: 1, padding: '42px 50px', flexDirection: 'column', alignItems: 'start', borderRadius: '24px' }}>
      <SearchBar />
      <ListFavoriteStore data={dataStore} />
      <Pagination count={7} size='large' showFirstButton showLastButton sx={{ display: 'flex', justifyContent: 'center' }} />
    </Paper>
  );
}

function ListFavoriteStore({ data }) {
  return (
    <Box display='flex' gap='24px' mt='48px' mb='32px'>
      {data.map((data, idx) => {
        return (
          <Card component='div' sx={{ flex: 1, overflow: 'hidden', borderRadius: '12px' }} variant='outlined' key={idx}>
            <MuiLink component={Link} href={'https://www.tokopedia.com/sepatucompass/compass-velocity-black-36?source=homepage.left_carousel.0.293672'}>
              <Box width='100%' height='180px' position='relative'>
                <Image src={StoreImg} fill alt='image-store' />
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
  );
}

export default FavoriteStoreClient;
