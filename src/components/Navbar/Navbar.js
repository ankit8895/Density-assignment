import React from 'react';
import { Box, Avatar, Button, Stack, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box className='w-screen h-12 px-4 flex justify-between items-center'>
      <Avatar variant='square'></Avatar>

      <Stack direction='row' spacing={2}>
        <Typography className='text-sm cursor-pointer'>Emotions</Typography>
        <Typography className='text-sm cursor-pointer'>Manifesto</Typography>
        <Typography className='text-sm cursor-pointer'>
          Self-awareness test
        </Typography>
        <Typography className='text-sm cursor-pointer'>Work With Us</Typography>
      </Stack>
      <Button
        variant='contained'
        className='text-sm normal-case rounded-full bg-black text-white'
      >
        Download app
      </Button>
    </Box>
  );
};

export default Navbar;
