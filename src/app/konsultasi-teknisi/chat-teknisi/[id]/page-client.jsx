'use client';

import { Avatar, Box, Card, CardActions, CardContent, CardHeader, IconButton, Paper, Typography, TextField, InputBase } from '@mui/material';
import { Clear, Add, Send } from '@mui/icons-material';

function KonsultasiClient() {
  const profileStyle = {
    backgroundColor: '#F9F6F6',
    height: '405px',
    width: '289px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    selfAlign: 'start',
    backgroundColor: '#C3E9FF',
  };

  const textStyle = {
    minHeight: '40px',
    flex: 1,
    selfAlign: 'start',
    bgcolor: '#E9F6FD',
    p:'8px 12px',
    borderRadius: '20px'
  };

  const chatBoxStyle = {
    flex: 1,
    borderRadius: '24px',
  };

  const text = (message) => (
    <Box display='flex' gap='8px' height='400px' alignItems='start' sx={{ overflowX: 'auto' }}>
      <Avatar />
      <Paper sx={{ width: 355, bgcolor: '#C3E9FF', p: '16px 18px' }}>
        <Typography variant='body2' color='#172675'>
          {message}
        </Typography>
      </Paper>
    </Box>
  );

  return (
    <Box mt='266px' mb='58px'>
      <Paper variant='elevation' elevation={6} sx={{ padding: '12px 24px', maxWidth: '787px', marginX: 'auto', borderRadius: '24px' }}>
        <Typography textAlign='center' fontWeight='500'>
          Sekarang kamu sudah bisa konsultasi dengan teknisi. Semoga kendalanya teratasi, ya!
        </Typography>
      </Paper>
      <Box maxWidth='1190px' mx='auto' mt='28px' display='flex' gap='24px'>
        <Paper component='section' sx={profileStyle}>
          <Avatar sx={{ width: '148px', height: '148px', mb: '18px' }} />
          <Paper sx={{ px: '62px', py: '32px', borderRadius: '12px' }}>
            <Typography variant='h6' fontWeight='600' textAlign='center' color='#172675'>
              Jamaludin
            </Typography>
            <Typography variant='body2' fontWeight='normal' textAlign='center'>
              0813 1547 2006
            </Typography>
          </Paper>
        </Paper>
        <Card component='section' sx={chatBoxStyle}>
          <CardHeader
            avatar={<Avatar sx={{ width: '72px', height: '72px' }} />}
            title={
              <Typography variant='h4' color='#172675' fontWeight='600'>
                Pak Yos Servis
              </Typography>
            }
            subheader={<Typography variant='body2'>Jalan Budi Raya No 100, Jakarta Barat</Typography>}
            action={
              <IconButton>
                <Clear />
              </IconButton>
            }
            sx={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.40)', alignItems: 'center' }}
          />
          <CardContent>{text('Hallo')}</CardContent>
          <Box display='flex' p='18px 32px' gap='18px' sx={{ bgcolor: '#C3E9FF', alignItems: 'center' }}>
            <IconButton aria-label='add button'>
              <Add />
            </IconButton>
            <InputBase id='filled-basic' placeholder='Tulis pesan disini...' variant='filled' size='small' sx={textStyle} />
            <IconButton aria-label='send message'>
              <Send />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default KonsultasiClient;
