'use client';

import { updateUser } from '@/app/actions/userActions';
import { updateUserSchema } from '@/utils/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axiosInstance from '@/utils/fetch';
import { updateUserProfile } from '@/services/userService';

function FormDiri({ dataUser }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserSchema),
    defaultValues: {
      username: dataUser?.username ? dataUser?.username : '',
      email: dataUser?.email ? dataUser?.email : '',
      password: dataUser?.password ? dataUser?.password : '',
      phoneNumber: dataUser?.phoneNumber ? dataUser?.phoneNumber : '',
      address: dataUser?.address ? dataUser?.address : '',
      fullname: dataUser?.fullname ? dataUser?.fullname : '',
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const gridForm = {
    display: 'grid',
    gridTemplateColumns: '2fr 1.5fr',
    justifyContent: 'space-between',
    columnGap: '20px',
    rowGap: '10px',
    mb: '32px',
  };

  const action = handleSubmit(async (data) => {
    try {
      await updateUser(data, dataUser?._id);
    } catch (err) {
      console.error(err);
    }
  });

  const visibilityPassword = () => (
    <InputAdornment position='end'>
      <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Box component={'form'} autoComplete='off' action={action}>
      <Box sx={gridForm}>
        <Box>
          <Typography variant='body2' fontWeight='600'>
            Nama
          </Typography>
          <TextField id='standard-basic' helperText={errors?.fullname?.message} variant='outlined' placeholder='Masukkan Nama Lengkap' fullWidth error={errors?.fullname?.message} {...register('fullname')} />
        </Box>
        <Box>
          <Typography variant='body2' fontWeight='600'>
            Nama Pengguna
          </Typography>
          <TextField id='standard-basic' helperText={errors?.username?.message} variant='outlined' placeholder='Masukkan Username' fullWidth error={errors?.username?.message} {...register('username')} />
        </Box>
        <Box>
          <Typography variant='body2' fontWeight='600'>
            Email
          </Typography>
          <TextField id='standard-basic' helperText={errors?.email?.message} variant='outlined' placeholder='Masukkan Email' fullWidth error={errors?.email?.message} {...register('email')} />
        </Box>
        <Box>
          <Typography variant='body2' fontWeight='600'>
            Nomor Telepon
          </Typography>
          <TextField id='standard-basic' helperText={errors?.phoneNumber?.message} variant='outlined' placeholder='Masukkan Nomor Telepon' fullWidth error={errors?.phoneNumber?.message} {...register('phoneNumber')} />
        </Box>
        <Box>
          <Typography variant='body2' fontWeight='600'>
            Alamat
          </Typography>
          <TextField id='standard-basic' helperText={errors?.address?.message} variant='outlined' placeholder='Masukkan Alamat' fullWidth error={errors?.address?.message} {...register('address')} />
        </Box>
        <Box>
          <Typography variant='body2' fontWeight='600'>
            Kata Sandi
          </Typography>
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
      </Box>
      <Button type='submit' variant='contained' sx={{ backgorund: '#34ADF2' }}>
        Simpan Perubahan
      </Button>
    </Box>
  );
}

export default FormDiri;
