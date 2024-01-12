'use client';

import SearchBar from '@/components/SearchBar';
import { Typography, Box, Card } from '@mui/material';

function Teknisi() {
  return (
    <Box paddingTop='456px'>
      <Box >
        <Typography textTransform='capitalize'>rekomendasi teknisi untukmu!</Typography>
        <Typography>Pilih ingin konsultasi dengan siapa, yuk!</Typography>
        <SearchBar />
      </Box>
      <Box>
        <Card>

        </Card>
      </Box>
    </Box>
  );
}

export default Teknisi;
