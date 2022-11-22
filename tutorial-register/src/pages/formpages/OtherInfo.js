import React , {useContext}from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Grid ,Button} from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import {multiStepContext} from  '../../StepContext'

 
function OtherInfo() {


  const {setStep,userData,setUserData}= useContext(multiStepContext);


  return (
    <Box>
    <FormControl>
         <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>

  <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="userName"
                  label="userName"
                  autoFocus
                  value={userData['userName']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'userName': e.target.value });
                  }}
        />
                </Grid>
                <Typography></ Typography>
                <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nationality"
                  name="nationality"
                  autoComplete="family-name"
                  value={userData['nationality']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'nationality': e.target.value });
                  }} 
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Gender"
                  name="gender"
                  autoComplete="family-name"
                  value={userData['gender']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'gender': e.target.value });
                  }} 
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Address"
                  name="address"
                  autoComplete="family-name"
                  value={userData['address']}
                  onChange={(e) => {
                   setUserData({ ...userData, 'address': e.target.value });
                  }} 
                />
                
                 
              </Grid>
           
              <Grid item xs={12} sm={12}>
                <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    autoComplete="family-name"
    value={userData['date']}
    onChange={(e) => {
      setUserData({ ...userData, 'date': e.target.value });
     }} 
  
   
  />
                </Grid>
                <Grid item xs={12} sm={12}>  
                <Button variant="contained" onClick={()=>setStep(1)} color='secondary'>Previous</Button><span></span>
                <Button variant="contained" onClick={()=>setStep(3)} color='primary'>Next</Button>
                </Grid>
              
               
            </Grid>
    </FormControl>
    </Box>
  )
}

export default OtherInfo