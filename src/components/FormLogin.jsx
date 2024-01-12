'use client';

import { createUser } from '@/app/actions/auth';
import { loginSchema } from '@/utils/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

function FormLogin() {
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

  return (
    <Box component={'form'} action={action}>
      <Typography variant='h5'>Login Pages</Typography>
      <Box>
        <Typography variant='subtitle1'>Username & Email</Typography>
        <TextField id='standard-basic' variant='outlined' error={errors?.username?.message} {...register('username')} />
        <Typography variant='subtitle1'>{errors?.username?.message}</Typography>
      </Box>
      <Box>
        <Typography variant='subtitle1'>Password</Typography>
        <TextField id='standard-basic' variant='outlined' error={errors?.password?.message} {...register('password')} />
        <Typography variant='subtitle1'>{errors?.password?.message}</Typography>
      </Box>
      <Button variant='contained' type='submit'>
        Login
      </Button>
    </Box>
  );
}

export default FormLogin;
