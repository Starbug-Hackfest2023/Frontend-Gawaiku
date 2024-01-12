'use client';
import { Card, CardContent, Typography } from '@mui/material';

function Cards() {
  return (
    <Card component='div' sx={{ width: '200px' }} variant='outlined'>
      <CardContent component='div'>
        <Typography variant='body2'>Chat dengan teknisi</Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
