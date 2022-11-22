import React ,{useContext}from 'react'
import {Grid,Paper} from '@mui/material'
import PersonalInfo from './formpages/PersonalInfo';
import OtherInfo from './formpages/OtherInfo'
import ReviewInfo from './formpages/ReviewInfo'
import {Stepper,StepLabel,Step} from '@mui/material'
import {multiStepContext} from '../StepContext'
import DisplayInfo from './formpages/DisplayInfo';





function Form() {
 
  const paperStyle={padding :20,height:'90vh',width:1500, margin:"20px auto"} 
   
  const {currentStep,finalData} =useContext(multiStepContext);
  function showStep(step){
    
    switch(step){

      case 1 :
        return <PersonalInfo/>
       
        case 2:
          return   <OtherInfo/>
         
          case 3 :
            return  <ReviewInfo/>

            default:
    }
  }

  return (
    <Grid>
      <Paper elevation={14} style={paperStyle}>
                      <h1 style={{color:'blue',textDecoration:'bold'}}>MULTI-STEP FORM</h1>
                      <Grid container
                      spacing={1}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      > 
                      
         <Stepper style={{width:'18%'}} activeStep={currentStep - 1} orientation="horizontal">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        </Stepper>
        {showStep(currentStep)}
        <br></br>
         {finalData.length > 0 ?    <DisplayInfo/> : ''}
        </Grid>

 


</Paper>
</Grid>
  )
}

export default Form;