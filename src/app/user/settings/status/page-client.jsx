'use client';

import { thousandSeparator } from '@/utils/format';
import { Box, Button, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

function StatusClient() {
  const steps = ['Konfirmasi Pembayaran', 'Antar/Jemput Barang', 'Proses Perbaikan/Instalasi', 'Pengambilan/Pengiriman Barang'];

  const status = <Typography variant='button'>Selesai</Typography>;

  return (
    <Paper sx={{ flex: 1, padding: '42px 50px', flexDirection: 'column', alignItems: 'start', borderRadius: '24px' }}>
      <Box sx={{ width: '100%', mb:'24px' }}>
        <Stepper activeStep={2} alternativeLabel >
          {steps.map((label, idx) => (
            <Step key={idx}>
              <StepLabel>
                <Typography variant='caption'>Step {idx + 1}</Typography>
                <Typography component='p' variant='caption'>
                  {label}
                </Typography>
                {status}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box display='flex'>
        <Box color='#172675'>
          <Typography variant='h5'>Status Barang</Typography>
          <Box sx={{ color: '#172675', mb: '12px', p: '8px 10px' }}>
            <Typography>Addin Suparjo</Typography>
            <Typography>(+62)8383737737</Typography>
            <Typography>Jalan Raya Bojongsoang No. 29, RT 001 RW 003, Bandung, Jawa Barat</Typography>
          </Box>
          <Box sx={{ color: '#172675', p: '8px 10px' }}>
            <Typography variant='h6'>Catatan:</Typography>
            <Typography variant='body2'>Power supply lemah (Ganti), Upgrade RAM 32GB, Tambah SSD 1TB</Typography>
          </Box>
        </Box>
        <RingkasanCart />
      </Box>
    </Paper>
  );
}

function RingkasanCart() {
  const textStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const listSummary = [
    {
      label: 'Tanggal Order',
      value: '15 Januari 2024',
    },
    {
      label: 'Metode Bayar',
      value: 'Transfer Bank',
    },
    {
      label: 'Subtotal',
      value: thousandSeparator(1900000),
    },
    {
      label: 'Pengiriman',
      value: thousandSeparator(8000),
    },
    {
      label: 'Total',
      value: thousandSeparator(1908000),
      variant: 'h6',
    },
  ];
  return (
    <Box>
      <Paper variant='elevation' elevation={6} sx={{ width: '200px', p: '16px 8px', borderRadius: '8px' }}>
        <Typography variant='h6'>Ringkasan Pesanan</Typography>
        <Box>
          {listSummary.map((item, idx) => {
            return (
              <Typography variant={item?.variant || 'caption'} sx={textStyle} key={idx}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </Typography>
            );
          })}
        </Box>
      </Paper>
      <Stack direction='row' sx={{ justifyContent: 'space-between', mt: '12px', gap: '6px' }}>
        <Button variant='contained' sx={{ flex: 1 }}>
          Dikirim
        </Button>
        <Button variant='contained' sx={{ flex: 1, bgcolor: 'white', color:'#172675' }}>
          Diantar
        </Button>
      </Stack>
    </Box>
  );
}

export default StatusClient;
