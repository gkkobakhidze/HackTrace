
// src/components/TopNavigation.js
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material';
import Link from 'next/link';

const TopNavigation = () => {
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Link href="/" passHref>
        <Button color="inherit" variant='outlined'>Submit Incident</Button>
        </Link>
        <Link href="/about" passHref>
        <Button color="inherit" >About</Button>
        </Link>
        <Link href="/list" passHref>
        <Button color="inherit" variant='outlined'>List of Incidents</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
