'use client';

import { AccountCircle } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Link as MuiLink, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../assets/logo-gawaiku.png';
import LoginModal from '../LoginModal';

function Navbar({ isAuth, dataUser }) {
  const auth = isAuth;
  const data = dataUser;

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const navContent = [
    { title: 'Beranda', path: '/' },
    { title: 'Tentang Kami', path: '/tentang-kami' },
    { title: 'Konsultasi', path: '/konsultasi-teknisi' },
  ];

  const navStyle = {
    backgroundColor: '#1aab5a',
    top: 50,
    left: 0,
    right: 0,
    margin: 'auto',
    maxWidth: '1120px',
    borderRadius: '59.5px',
    backgroundColor: ' #C3E9FF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    padding: '24px 64px',
  };

  return (
    <Box>
      <AppBar component={'nav'} position='fixed' sx={navStyle}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <MuiLink component={Link} href='/' underline='none' sx={{ color: 'white' }}>
            <Image src={Logo} alt='Logo Gawaiku' width='auto' height='auto' />
          </MuiLink>
          <Box display='flex' alignItems='center' gap='21px'>
            {navContent.map((nav, idx) => {
              return (
                <MuiLink component={Link} href={nav.path} underline='none' key={idx} color='black' paddingX='16px' textTransform='uppercase'>
                  {nav.title}
                </MuiLink>
              );
            })}
            {auth ? (
              <IconButton LinkComponent={Link} href='/user/settings' size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' color='inherit' sx={{ borderRadius: 16, gap: 2 }}>
                <AccountCircle fontSize='large' />
                <Typography variant='h5'>{data?.username || '-'}</Typography>
              </IconButton>
            ) : (
              <Button variant='contained' onClick={handleOpen}>
                Masuk
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <LoginModal open={modalOpen} onClose={handleClose} />
    </Box>
  );
}

export default Navbar;
