'use client';

import { Avatar, Box, Divider, Pagination, Paper, Rating, Stack, Typography } from '@mui/material';
import HistoryImg from '@/components/assets/historyImg.png';
import Image from 'next/image';
import { thousandSeparator } from '@/utils/format';

function HistoryClient() {
  const listHistory = [
    {
      store: 'Via Vla Elektronik',
      address: 'Jl. Mangga Dua Raya No. 29, Bandung',
      notes: 'Power supply lemah (Ganti), Upgrade RAM 32GB, Tambah SSD 1TB',
      rating: 4,
      price: thousandSeparator(1900000),
    },
    {
      store: 'Via Vla Elektronik',
      address: 'Jl. Mangga Dua Raya No. 29, Bandung',
      notes: 'Power supply lemah (Ganti), Upgrade RAM 32GB, Tambah SSD 1TB',
      rating: 5,
      price: thousandSeparator(1900000),
    },
  ];

  return (
    <Paper sx={{ flex: 1, paddingY: '42px', flexDirection: 'column', alignItems: 'start', borderRadius: '24px' }}>
      {listHistory.map((item, idx) => {
        return (
          <Box key={idx}>
            <Stack direction='row' spacing={2} px='50px'>
              <Avatar />
              <Stack direction='row' sx={{ justifyContent: 'space-between', flex: 1 }}>
                <Box width='280px'>
                  <Typography variant='h6'>{item.store}</Typography>
                  <Typography variant='body2' mb='14px'>
                    {item.address}
                  </Typography>
                  <Typography variant='h6'>Catatan:</Typography>
                  <Typography variant='body2'>{item.notes}</Typography>
                  <Typography variant='h6' display='flex' alignItems='center' gap='12px'>
                    Beri Penilaian:
                    <Rating name='read-only' value={item.rating} readOnly />
                  </Typography>
                </Box>
                <Box>
                  <Image src={HistoryImg} width='106px' height='106px' />
                  <Typography variant='body2' textAlign='center'>
                    {item.price}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <Divider sx={{ my: '42px' }} />
          </Box>
        );
      })}
      <Pagination count={7} size='large' showFirstButton showLastButton sx={{ display: 'flex', justifyContent: 'center' }} />
    </Paper>
  );
}

export default HistoryClient;
