'use client';

import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LayoutClient({ children }) {
  const pathname = usePathname();

  const profileStyle = {
    backgroundColor: '#F9F6F6',
    width: '366px',
    display: 'flex',
    padding: '54px 64px',
    flexDirection: 'column',
    borderRadius: '24px',
    selfAlign: 'start',
    backgroundColor: '#C3E9FF',
  };

  const asideNav = [
    {
      nav: 'Informasi Pengguna',
      path: '/user/settings',
    },
    {
      nav: 'Toko Favorit',
      path: '/user/settings/favorite',
    },
    {
      nav: 'Status Perbaikan',
      path: '/user/settings/status',
    },
    {
      nav: 'Riwayat Perbaikan',
      path: '/user/settings/history',
    },
  ];

  return (
    <Box mt='266px' mb='58px'>
      <Box marginX='auto' maxWidth='1120px' mt='28px' display='flex' gap='24px'>
        <Paper component='section' sx={profileStyle}>
          <Typography variant='h5' fontWeight='600' textAlign='center' color='#172675' mb='24px'>
            Profile Pengguna
          </Typography>
          <Stack spacing={3}>
            {asideNav.map((nav, idx) => {
              return (
                <Button variant={nav.path === pathname ? 'contained' : 'outlined'} LinkComponent={Link} href={nav.path} key={idx}>
                  {nav.nav}
                </Button>
              );
            })}
          </Stack>
        </Paper>
        {children}
      </Box>
    </Box>
  );
}

export default LayoutClient;
