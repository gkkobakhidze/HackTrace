
// src/components/TopNavigation.js
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';

const TopNavigation = () => {
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Link href="/" passHref>
          <Button color="inherit" variant='outlined'>Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit" variant='outlined'>About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
