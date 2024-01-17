'use client';

import { registerUser } from '@/app/actions/auth';
import { registerSchema } from '@/utils/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControlLabel, FormHelperText, FormControl, Radio, RadioGroup, TextField, Typography, InputAdornment, IconButton, Link as MuiLink } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const action = handleSubmit(async (data) => {
    try {
      await registerUser(data);
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const visibilityPassword = () => (
    <InputAdornment position='end'>
      <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Box component={'form'} action={action}>
      <Box mb='16px'>
        <Typography variant='body2'>Username</Typography>
        <TextField id='standard-basic' fullWidth helperText={errors?.username?.message} variant='outlined' size='small' error={errors?.username?.message} {...register('username')} />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Email</Typography>
        <TextField id='standard-basic' fullWidth helperText={errors?.email?.message} variant='outlined' size='small' error={errors?.email?.message} {...register('email')} />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Kata Sandi</Typography>
        <TextField
          id='standard-basic'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: visibilityPassword(),
          }}
          fullWidth
          helperText={errors?.password?.message}
          variant='outlined'
          size='small'
          error={errors?.password?.message}
          {...register('password')}
        />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Konfirmasi Kata Sandi</Typography>
        <TextField
          id='standard-basic'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: visibilityPassword(),
          }}
          fullWidth
          helperText={errors?.confirmPassword?.message}
          variant='outlined'
          size='small'
          error={errors?.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Nomor Telepon</Typography>
        <TextField id='standard-basic' fullWidth helperText={errors?.phoneNumber?.message} variant='outlined' size='small' error={errors?.phoneNumber?.message} {...register('phoneNumber')} />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Nama</Typography>
        <TextField id='standard-basic' fullWidth helperText={errors?.fullname?.message} variant='outlined' size='small' error={errors?.fullname?.message} {...register('fullname')} />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Alamat</Typography>
        <TextField id='standard-basic' fullWidth helperText={errors?.address?.message} variant='outlined' size='small' error={errors?.address?.message} {...register('address')} />
      </Box>
      <Box mb='16px'>
        <Typography variant='body2'>Zip Code</Typography>
        <TextField id='standard-basic' fullWidth helperText={errors?.zipCode?.message} variant='outlined' size='small' error={errors?.zipCode?.message} {...register('zipCode')} />
      </Box>
      <FormControl error={!!errors?.gender?.message}>
        <Typography variant='body2'>Gender</Typography>
        <Controller
          control={control}
          name='promoting'
          {...register('gender')}
          render={({ field }) => (
            <RadioGroup {...field} row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
              <FormControlLabel value='Perempuan' control={<Radio />} label='Perempuan' />
              <FormControlLabel value='Laki-laki' control={<Radio />} label='Laki-laki' />
            </RadioGroup>
          )}
        />
        <FormHelperText id='my-helper-text' error={true}>
          {errors?.gender?.message}
        </FormHelperText>
      </FormControl>
      <Box mb='16px'>
        <Typography variant='body2'>Tanggal Lahir</Typography>
        <TextField id='standard-basic' type='date' fullWidth helperText={errors?.birthDate?.message} variant='outlined' size='small' error={errors?.birthDate?.message} {...register('birthDate')} />
      </Box>
      <Button variant='contained' type='submit'>
        Daftar Sekarang
      </Button>
      <Typography variant='body2' mt={'12px'}>
        Sudah punya akun? &nbsp;
        <MuiLink component={Link} href='/'>
          Masuk Sekarang
        </MuiLink>
      </Typography>
    </Box>
  );
}

export default FormRegister;
