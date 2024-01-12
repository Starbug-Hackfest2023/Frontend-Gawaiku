'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '../assets/phone.svg';

function Footer() {
  const headingStyle = {
    backdropFilter: 'blur(2px)',
    letterSpacing: 0.35,
  };
  return (
    <Box>
      <Box height='21px' sx={{ backgroundColor: '#C3E9FF' }}></Box>
      <Box display='flex' justifyContent='space-between' color='white' paddingX='102px' paddingY='64px' sx={{ backgroundColor: '#34ADF2' }}>
        <Box>
          <Typography variant='h4' sx={headingStyle}>
            Punya Toko Servis Elektronik & Gadget?
          </Typography>
          <Typography variant='h4' sx={headingStyle} marginBottom={'10px'}>
            Buka Cabangnya aja di Gawaiku!
          </Typography>
          <Typography variant='body2' marginBottom={'24px'}>
            Mudah, Satset, dan Bebas Layanan Transaksi. &nbsp;
            <Typography component='span' fontWeight={800}>
              GRATIS
            </Typography>
          </Typography>
          <Button variant='contained'>BUKA TOKO GRATIS</Button>
        </Box>
        <Box display='flex' alignItems='center' gap='12px'>
          <Image src={PhoneIcon} alt='phone-icon-gawaiku' width='auto' height='auto' />
          <Box>
            <Typography variant='h3' fontWeight={500} fontSize='3.25rem' lineHeight={'54.6px'}>
              DAFTAR <br /> DARI <br /> RUMAH
            </Typography>
            <Typography variant='h6' fontWeight='normal' lineHeight='21px'>
              www.gawaiku.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
