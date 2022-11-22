import React ,{useContext}from 'react'
import Button from '@mui/material/Button'
import {multiStepContext} from  '../../StepContext'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'




function ReviewInfo() {

  const {setStep,userData,setUserData,submitData}= useContext(multiStepContext);
  return (
     <Grid container spacing={2}>
       <Grid item xs={12} sm={12}>

<TextField
                autoComplete="given-name"
                name="info"
                
                fullWidth
                id="info"
                label="Any other info ?"
                autoFocus
                value={userData['info']}
                onChange={(e) => {
                 setUserData({ ...userData, 'info': e.target.value });
                }}
      />
              </Grid>
              <Grid item xs={12} sm={12}>
              <Button variant="contained" onClick={()=>setStep(2)} color='secondary'>Previous</Button><span></span>
                  <Button variant="contained"  onClick={submitData}color='primary'>Submit</Button>
                   </Grid>
                  
                 
             
     </Grid>
  
   
            
  )

}

export default ReviewInfo