import React from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';


function OtherInfo({ formData, setFormData }) {
  return (
    <Box>
    <FormControl>
         <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>

  <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="firstName"
                  label="User Name"
                  autoFocus
                  value={formData.userName}
        onChange={(e) => {
          setFormData({ ...formData, userName: e.target.value });
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
                  value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
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
                  value={formData.gender}
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }} 
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Address"
                  name="adddress"
                  autoComplete="family-name"
                  value={formData.address}
        onChange={(e) => {
          setFormData({ ...formData, address: e.target.value });
        }} 
                />
              </Grid>
           
              
               
            </Grid>
    </FormControl>
    </Box>
  )
}

export default OtherInfo