import React from 'react';
import { Stack, Paper, Container, Typography } from '@mui/material';

const Introduction = () => {
  return (
    <Container className='w-[75%] mt-2 mb-10'>
      <Stack direction={'column'} spacing={4}>
        <Paper className='h-52'></Paper>
        <Stack direction={'row'} justifyContent={'space-around'}>
          <Typography className=' text-black font-semibold'>
            EQ beats IQ
          </Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Typography className='text-sm text-gray-500 w-48'>
              People with high emotional intelligence (EQ) live more fulfilled
              lives. They tend to be happier and have healthier relationships.
            </Typography>
            <Typography className='text-sm text-gray-500 w-48'>
              They are more successful in their pursuits and make for inspiring
              leaders. According to science, they earn $29k a year.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Introduction;
