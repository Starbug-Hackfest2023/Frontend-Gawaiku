'use client';

import { registerUser } from '@/app/actions/auth';
import { registerSchema } from '@/utils/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const action = handleSubmit(async (data) => {
    const response = data?.username && data?.password && (await registerUser(data));
  });

  return (
    <Box component={'form'} action={action}>
      <Typography variant='h5'>Register Pages</Typography>
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
        Register
      </Button>
    </Box>
  );
}

export default FormRegister;
