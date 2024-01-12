'use client';

import { createUser } from '@/app/actions/auth';
import { loginSchema } from '@/utils/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Modal, TextField, Typography, Button, Link as MuiLink } from '@mui/material';
import { useForm } from 'react-hook-form';
import LogoGawaiku from '@/components/assets/gawaiku-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

function LoginModal({ open, onClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const action = handleSubmit(async (data) => {
    const response = data?.username && data?.password && (await createUser(data));
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 536,
    // height: 516,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: '36px 112px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Box component={'form'} action={action} sx={modalStyle}>
        <Image src={LogoGawaiku} width='100%' height='100%' alt='test' />
        <Typography variant='h4' fontWeight='800' marginTop='36px' marginBottom='18px'>
          Selamat datang!
        </Typography>
        <Box width='310px'>
          <Box marginBottom='18px'>
            <TextField id='standard-basic' variant='outlined' placeholder='Masukkan Username atau Email' fullWidth error={errors?.username?.message} {...register('username')} />
            <Typography variant='subtitle1'>{errors?.username?.message}</Typography>
          </Box>
          <Box marginBottom='18px'>
            <TextField id='standard-basic' variant='outlined' placeholder='Masukkan Kata Sandi' fullWidth error={errors?.password?.message} {...register('password')} />
            <Typography variant='subtitle1'>{errors?.password?.message}</Typography>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='12px'>
            <Button type='submit' variant='contained' sx={{ backgorund: '#34ADF2' }}>
              Masuk
            </Button>
            <Typography variant='body2'>Lupa Kata Sandi!</Typography>
          </Box>
          <Typography component='span' variant='body2'>
            Belum punya akun?
            <MuiLink component={Link} href='/user/register' shallow={false}>
              &nbsp; Daftar dulu, yuk!
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginModal;
