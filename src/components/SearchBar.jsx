import { Paper, InputBase, IconButton } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';

function SearchBar() {
  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 720, mx: 'auto', borderRadius:28 }}>
      <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <Menu />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Hinted Search Text' inputProps={{ 'aria-label': 'search google maps' }} />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
