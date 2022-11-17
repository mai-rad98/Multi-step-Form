import React from 'react'
import Form from './Form';
import { Typography } from '@mui/material';

function Home() {
  return (
    <>
    <Typography>Please fill out the from below to enroll</ Typography>
    <></>
    <Form />
   {/*  <Box
    sx={{
      justifyContent:'center', 
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 1000,
        height: 1000,
      },
    }}
  >
    <Paper elevation={5}> <Form /></Paper>
    

    
  </Box> */}
  </>
);
  
}

export default Home