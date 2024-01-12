'use client';
import { Typography, Box, Button } from '@mui/material';
import styles from './styles.module.css';
import Link from 'next/link';

function TentangKamiClient() {
  return (
    <Box className={styles.container} component='section'>
      <Typography variant='h2' fontWeight='900' lineHeight='normal' maxWidth='676px'>
        Smart Solutions for Your Electronics
      </Typography>
      <Typography variant='h5' marginBottom='30px' maxWidth='575px' fontWeight='500' lineHeight='26.25px'>
        Selamat datang di Gawaiku, Solusi Tepercaya untuk Servis Gadget dan Elektronik. Kami siap memperbaiki semua perangkat Anda dengan cepat dan berkualitas. Dan pastinya kami menyediakan jasa antar jemput Elektronik dan Gadget kamu,
        loh.
      </Typography>
      <Typography variant='h5' marginBottom='72px' maxWidth='575px' fontWeight='500' lineHeight='26.25px'>
        Hubungi kami sekarang juga untuk mendapatkan layanan terbaik!
      </Typography>
      <Box display='flex' gap='48px'>
        <Button component={Link} href='/konsultasi-teknisi' variant='contained' sx={{ padding: '19.5px 16px', width: '313px', textAlign: 'center' }}>
          CHAT DENGAN TEKNISI
        </Button>
        <Button variant='contained' sx={{ padding: '19.5px 16px', width: '313px', textAlign: 'center' }}>
          BOOKING SERVICE
        </Button>
      </Box>
    </Box>
  );
}

export default TentangKamiClient;
