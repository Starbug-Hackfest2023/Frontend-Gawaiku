'use client';

import { loginUser } from '@/app/actions/auth';
import LogoGawaiku from '@/components/assets/gawaiku-logo.svg';
import { loginSchema } from '@/utils/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Link as MuiLink, Modal, TextField, Typography } from '@mui/material';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const action = handleSubmit(async (data) => {
    try {
      const user = await loginUser(data);
      const token = user?.data?.token;
      setCookie('token', token);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 536,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: '36px 112px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const visibilityPassword = () => (
    <InputAdornment position='end'>
      <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Modal open={open} onClose={onClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Box component={'form'} action={action} sx={modalStyle}>
        <Image src={LogoGawaiku} width='100%' height='100%' alt='test' />
        <Typography variant='h4' fontWeight='800' marginTop='36px' marginBottom='18px'>
          Selamat datang!
        </Typography>
        <Box width='310px'>
          <Box marginBottom='18px'>
            <TextField id='standard-basic' helperText={errors?.username?.message} variant='outlined' placeholder='Masukkan Username atau Email' fullWidth error={errors?.username?.message} {...register('username')} />
          </Box>
          <Box marginBottom='18px'>
            <TextField
              id='standard-basic'
              type={showPassword ? 'text' : 'password'}
              helperText={errors?.password?.message}
              variant='outlined'
              placeholder='Masukkan Kata Sandi'
              fullWidth
              error={errors?.password?.message}
              InputProps={{
                endAdornment: visibilityPassword(),
              }}
              {...register('password')}
            />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='12px'>
            <Button type='submit' variant='contained' sx={{ backgorund: '#34ADF2' }}>
              Masuk
            </Button>
            <Typography variant='body2'>Lupa Kata Sandi!</Typography>
          </Box>
          <Typography component='span' variant='body2'>
            Belum punya akun?
            <MuiLink component={Link} href='/register' shallow={false}>
              &nbsp; Daftar dulu, yuk!
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginModal;
