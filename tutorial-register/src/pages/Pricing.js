import React from 'react'

import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'




function Pricing() {
  return (
    <Grid >
      <Typography justifyContent={"center"}>Pricing</Typography>
      <Typography>
Quickly build a effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.</Typography>

        <Box  sx={{
        justifyContent:'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 450,
        },
      }}
      >
        <Paper elevation={3}>
          <Typography justifyContent={"center"}>PRICING</Typography>
          
          
          </Paper>
        <Paper elevation={3}><Typography justifyContent={"center"}>PRICING</Typography></Paper>
        <Paper elevation={3}><Typography justifyContent={"center"}>PRICING</Typography></Paper>
      </Box>
    </Grid>
  )
}

export default Pricing