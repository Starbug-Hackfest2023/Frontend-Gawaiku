'use client';

import TeknisiImg from '@/components/assets/teknisi.png';
import SearchBar from '@/components/SearchBar';
import { thousandSeparator } from '@/utils/format';
import { Box, Button, Card, CardMedia, Pagination, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

function KonsultasiClient() {
  const listTeknisi = [
    {
      teknisiImg: TeknisiImg,
      name: 'Pablo Escobar',
      storeName: 'Pak Yos Service',
      rating: 5,
      price: 25000,
    },
    {
      teknisiImg: TeknisiImg,
      name: 'Pablo Escobar',
      storeName: 'Pak Yos Service',
      rating: 4,
      price: 25000,
    },
    {
      teknisiImg: TeknisiImg,
      name: 'Pablo Escobar',
      storeName: 'Pak Yos Service',
      rating: 4,
      price: 25000,
    },
    {
      teknisiImg: TeknisiImg,
      name: 'Pablo Escobar',
      storeName: 'Pak Yos Service',
      rating: 4,
      price: 25000,
    },
    {
      teknisiImg: TeknisiImg,
      name: 'Pablo Escobar',
      storeName: 'Pak Yos Service',
      rating: 4,
      price: 25000,
    },
    {
      teknisiImg: TeknisiImg,
      name: 'Pablo Escobar',
      storeName: 'Pak Yos Service',
      rating: 4,
      price: 25000,
    },
  ];

  const paperStyle = {
    maxWidth: '1309px',
    mx: 'auto',
    backgroundColor: '#F9F6F6',
  };

  return (
    <Paper component='section' sx={{ ...paperStyle, mt: '266px', pb: '36px', mb: '142px' }}>
      <Paper sx={{ py: '56px', backgroundColor: '#C3E9FF', marginBottom: '74px' }}>
        <Typography textTransform='uppercase' variant='h4' textAlign='center' fontWeight='700' color='#172675'>
          rekomendasi teknisi untukmu!
        </Typography>
        <Typography variant='h5' textAlign='center' marginX='auto' marginBottom='42px' color='#172675'>
          Pilih ingin konsultasi dengan siapa, yuk!
        </Typography>
        <SearchBar />
      </Paper>
      <Box marginX='52px' marginBottom='84px' display='flex' flexWrap='wrap' gap='36px' justifyContent='space-between'>
        {listTeknisi.map((item, idx) => {
          return (
            <Card key={idx} sx={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              <CardMedia sx={{ position: 'relative', width: '188px', aspectRatio: '1 / 1' }}>
                <Image src={item.teknisiImg} fill alt={item.name} />
              </CardMedia>
              <Box width='360px' display='flex' flexDirection='column' alignItems='start' justifyContent='center'>
                <Typography variant='h4' fontWeight='500' lineHeight='27px'>
                  {item.name}
                </Typography>
                <Typography variant='h6' fontWeight='400' lineHeight='27px'>
                  {item.storeName}
                </Typography>
                <Rating name='read-only' value={item.rating} readOnly sx={{ marginBottom: '32px' }} />
                <Box display='flex' gap='28px' alignItems='center'>
                  <Typography variant='h5' fontWeight='600'>
                    Rp {thousandSeparator(item.price)}
                  </Typography>
                  <Button component={Link} href='chat-teknisi/1' variant='contained' sx={{ selfAlign: 'start', backgroundColor: '#34ADF2' }} size='small'>
                    Chat
                  </Button>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
      <Pagination count={7} size='large' showFirstButton showLastButton sx={{ display: 'flex', justifyContent: 'center' }} />
    </Paper>
  );
}

export default KonsultasiClient;
