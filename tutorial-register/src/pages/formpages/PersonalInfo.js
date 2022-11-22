import React, { useContext } from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Grid ,Button} from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import {multiStepContext} from  '../../StepContext'


function PersonalInfo() {

  const {setStep,userData,setUserData}= useContext(multiStepContext);
  return (
    <Box>
    <FormControl>
         <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>

  <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
               value={userData['firstName']}
        onChange={(e) => {
         setUserData({ ...userData, 'firstName': e.target.value });
        }}
                />
                </Grid>
                <Typography></ Typography>
                <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  value={userData['lastName']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'lastName': e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="family-name"
                  value={userData['email']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'email': e.target.value });
                  }}
        />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email1"
                  label="Back up Email"
                  name="email1"
                  autoComplete="family-name"
                  value={userData['email1']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'email1': e.target.value });
                  }}

                />
                <Grid  item xs={12} sm={12}>
                <Button variant="contained" onClick={()=>setStep(2)} color='primary'>Next</Button>
                </Grid>
              </Grid>
           
              
               
            </Grid>
    </FormControl>
    </Box>
  )
}

export default PersonalInfo