'use client';

import FormRegister from '@/components/FormRegister';
import { Box, Paper, Typography } from '@mui/material';
import ImgRegister from '@/components/assets/imgRegister.svg';
import LogoGawaiku from '@/components/assets/gawaiku-logo.svg';
import Image from 'next/image';

function RegisterClient() {
  const paperStyle = {
    display: 'flex',
    width: '1287px',
    mx: 'auto',
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#D9EFFB',
  };
  return (
    <Box display='flex' justifyContent='center' alignItems='center' p='100px'>
      <Paper sx={paperStyle}>
        <Box position='relative' flex={1} overflow='hidden'>
          <Image src={ImgRegister} width='auto' height='auto' alt='svg-illustration' />
        </Box>
        <Box width='50%' padding='51px 46px'>
          <Paper sx={{ height: '100%', p: '52px 102px', borderRadius: '12px', color: '#172675' }}>
            <Box marginX='auto' width='100px' position='relative' sx={{ aspectRatio: '1 / 1', mb: '40px' }}>
              <Image src={LogoGawaiku} fill alt='svg-logo-gawaiku' />
            </Box>
            <Typography variant='h5' fontWeight='bold'>
              Selamat Datang di GawaiKu!
            </Typography>
            <Typography variant='body1' fontWeight='700'>
              Buat akun dulu, yuk!
            </Typography>
            <FormRegister />
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export default RegisterClient;
