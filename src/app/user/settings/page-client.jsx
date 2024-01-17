'use client';

import FormDiri from '@/components/FormDiri';
import { Avatar, Box, IconButton, Paper, Typography } from '@mui/material';

function UserSettingsClient({ dataUser }) {
  return (
    <Paper sx={{ flex: 1, padding: '42px 50px', flexDirection: 'column', alignItems: 'start', borderRadius: '24px' }}>
      <Box sx={{ display: 'flex', gap: '24px', mb: '48px' }}>
        <Avatar />
        <Box display='flex' justifyContent='space-between' alignItems='center' flex='1'>
          <Box>
            <Typography variant='h5'>{dataUser?.fullname}</Typography>
            <Typography variant='body2'>Bekasi, Jawa Barat</Typography>
          </Box>
          <IconButton sx={{ borderRadius: '12px' }}>
            <Typography variant='body1'>Ubah Profile</Typography>
          </IconButton>
        </Box>
      </Box>
      <FormDiri dataUser={dataUser} />
    </Paper>
  );
}



export default UserSettingsClient;
