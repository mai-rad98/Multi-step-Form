import React from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';


function PersonalInfo({ formData, setFormData }) {
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
                  value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
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
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }} 
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Email"
                  name="email"
                  autoComplete="family-name"
                  value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }} 
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Back up Email"
                  name="email"
                  autoComplete="family-name"
                  value={formData.backupEmail}
        onChange={(e) => {
          setFormData({ ...formData, backupEmail: e.target.value });
        }} 

                />
              </Grid>
           
              
               
            </Grid>
    </FormControl>
    </Box>
  )
}

export default PersonalInfo